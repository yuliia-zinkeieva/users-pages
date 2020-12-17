import {Redirect, Route} from "react-router";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authenticateAction} from "../services/redux/actions/auth";

const PrivateRoute = ({component: Component, ...rest}) => {
    const dispatch = useDispatch();
    const authenticateCallback = () => {
        dispatch(authenticateAction());
    }
    authenticateCallback();
    const isAuthorized = useSelector(({auth}) => auth.isAuthorized);
    return (
        <Route {...rest} render={(props) => (
            isAuthorized
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '',
                    state: {from: props.location}
                }}/>
        )}/>)
}

export default PrivateRoute;
