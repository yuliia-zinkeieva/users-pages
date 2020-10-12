import React, {Component} from "react";


export default class CustomersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    receivedData() {
        console.log('receive');
        fetch('http://localhost:4000/customer/listOfAll', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},

        })
            .then(response => {
                return (response.json());
            })
            .then(result => {
                let list1 = JSON.stringify(result, null, 2);
                console.log(list1);
                this.setState({
                    data: list1
                })
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.receivedData()
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}
