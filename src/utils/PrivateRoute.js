import {Redirect, Route} from "react-router";
import React from "react";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            localStorage.getItem('isAuthorized') === 'true'
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )}/>)
}

export default PrivateRoute;
