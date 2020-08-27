import React, {Component} from "react";
import { Link} from "react-router-dom";
import axios from "axios"
import ReactPaginate from "react-paginate";
import { Container, Row, Col } from "react-grid-system";
import "./styles.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 7,
            currentPage: 0
        }
    }

    receivedData() {
        axios
            .get("https://randomuser.me/api/?page=3&results=50&seed=abc")
            .then(res => {
                const data = res.data.results;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd =>
                    <div>
                    <Container fluid>
                    <Row>
                        <Col md={1}>
                          <img alt={pd.name.first} src={pd.picture.medium}/>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Link to={"/"+ pd.id.value}>
                                    <button variant="outlined">
                                        {pd.name.title} {pd.name.first} {pd.name.last}
                                    </button>
                                </Link>
                            </Row >
                            <Row >
                                Email: {pd.email}
                            </Row>
                        </Col>
                    </Row>
            </Container> </div>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    }

    componentDidMount() {
        this.receivedData()
    }

    render() {
        return (
            <div>
                    {this.state.postData}
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
            </div>
        );
    }
}
