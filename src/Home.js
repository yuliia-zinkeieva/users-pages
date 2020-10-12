import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container} from "react-grid-system";
import LogOut from "./LogOut";


function ToLogin() {
    window.location.href = 'http://localhost:3000/login';
}


function CheckStatus() { //todo:check authorization
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const status = urlParams.get('status')
    return status;
}


function Status(status) {
    if (status.status === 'true') {
        window.alert('You have been logged in')
        return (
            <div>
            <Link to="/create">
                        <button variant="outlined" >
                            Create a customer
                        </button>
                    </Link>
            <button onClick={LogOut}>
                Logout
            </button>
            </div>
        );
    } else if (status.status == null) {
        return (
            <Container fluid>
                <Col>
                    <Link to="/registration">
                        <button variant="outlined">
                            Sign Up
                        </button>
                    </Link>
                </Col>
                <Col>
            <button onClick={ToLogin}>
                LogIN
            </button>
                    </Col>
            </Container>
        );
    } else {
        window.alert('You have been logged OUT')
        return (
            <Container fluid>
                <Col>
                    <Link to="/registration">
                        <button variant="outlined">
                            Sign Up
                        </button>
                    </Link>
                </Col>
                <Col>
            <button onClick={ToLogin}>
                LogIN
            </button>
                    </Col>
            </Container>
        );
    }
}


const Home = () => {
    const st = CheckStatus();
    return (
        <div>
            <Container fluid>
                <h1>Home page </h1>
                <Col>
                    <Link to="/customers">
                        <button variant="outlined">
                            List of customers
                        </button>
                    </Link>
                </Col>

                    <Status status={st}/>

            </Container>
        </div>
    );
}

export default Home;