import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container} from "react-grid-system";
import LogOut from "./LogOut";
import CheckAuthorization from "./CheckAuthorization";


function ToLogin() {
    window.location.href = 'http://localhost:3000/login';
}

function Status({status}) {
    if (status) {
        return (
            <div>
            <Link to="/create">
                        <button variant="outlined" >
                            Create a customer
                        </button>
                    </Link>
                <Link to="/delete">
                        <button variant="outlined" >
                            Delete a customer
                        </button>
                    </Link>
            <button onClick={LogOut}>
                Logout
            </button>
            </div>
        );
    } else {
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
    const [isAuthorized, setIsAuthorized] = React.useState(false);
    React.useEffect(()=>{
         CheckAuthorization().then((authorized) => setIsAuthorized(authorized))
    },[])

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

                    <Status status={isAuthorized}/>

            </Container>
        </div>
    );
}

export default Home;