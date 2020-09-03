import React from "react";
import axios from "axios";
import {Col, Container, Row} from "react-grid-system";
import {Link} from "react-router-dom";


function findUser(data, id) {
    return data.find(user => String(user.id.value) == String(id));
}


let data; //???
axios
    .get(`https://randomuser.me/api/?page=3&results=50&seed=abc`)
    .then(res => {
        data = res.data.results;
    });


const PersonalPage = (props) => {
    let user = findUser(data, props.match.params.id);
    //console.log(findUser(data, props.match.params.id));

    return (
        <div>
            <h1>PERSONAL PAGE </h1>
            <Link to="/">
                <button variant="outlined">
                    Back
                </button>
            </Link>
            <h1></h1>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <img alt={user.name.first} src={user.picture.large}/>
                    </Col>
                    <Col md={5}>
                        <Row>
                            {user.name.title} {user.name.first} {user.name.last}
                        </Row>
                        <Row>
                            Email: {user.email}
                        </Row>
                        <Row>
                            Phone: {user.phone}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalPage;

