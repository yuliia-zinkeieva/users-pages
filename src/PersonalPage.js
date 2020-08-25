import React from "react";
import axios from 'axios';
import {Col, Container, Row} from "react-grid-system";
import {Link} from "react-router-dom";

let data;
axios
    .get(`https://randomuser.me/api/?page=3&results=50&seed=abc`)
    .then(res => {
        data = res.data.results;
    });

const PersonalPage = (props) => {
    const personalId = props.match.params.id;  //only id.value; can't find diff prsns
    console.log(data);
    let user;

    for (let i = 0; i < data.length; i++) {
        if (String(data[i].id.value) === String(personalId)) {
            user = data[i];
            break;
        }
    }

    return (
        <div>
          <h1>PERSONAL PAGE </h1>
            <Link to="/">
                <button variant="outlined">
                    Back
                </button>
            </Link>
            <h1> </h1>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <img alt={user.name.first} src={user.picture.large}/>
                    </Col>
                    <Col md={5}>
                        <Row>
                            {user.name.title} {user.name.first} {user.name.last}
                        </Row >
                        <Row >
                            Email: {user.email}
                        </Row>
                        <Row >
                            Phone: {user.phone}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalPage;



