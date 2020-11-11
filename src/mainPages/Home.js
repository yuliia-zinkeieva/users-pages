import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Col, Container} from "react-grid-system";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authenticateAction, logOutAction} from "../services/redux/actions/auth";

function Status({status}) {
    let history = useHistory();

    const dispatch = useDispatch();
    const logOutCallback = () => {
        dispatch(logOutAction());
    }

    if (status) {
        return (
            <div>
                <Link to="/create">
                    <button variant="outlined">
                        Create a customer
                    </button>
                </Link>
                <button onClick={logOutCallback}>
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
                    <button onClick={() => {
                        history.push("/login")
                    }}>
                        LogIN
                    </button>
                </Col>
            </Container>
        );
    }
}


const Home = () => {
    const dispatch = useDispatch();
    const authenticateCallback = () => {
        dispatch(authenticateAction());
    }
    authenticateCallback();
    const isAuthorized = useSelector(({auth}) => auth.isAuthorized);
    // React.useEffect(() => {
    //     // todo: checkAuthorization action
    //     CheckAuthorization()//.then((authorized) => setIsAuthorized(authorized))
    // }, [])

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