import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PrivateRoute from '../utils/PrivateRoute';
import EditCustomer from './EditCustomer/EditCustomer';
import CreateCustomer from "./CreateCustomer";
import ErrorPage from './ErrorPage'

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route path='/error' component={ErrorPage}/>
            <PrivateRoute exact path='/create' component={CreateCustomer}/>
            <PrivateRoute exact path='/:id' component={EditCustomer}/>
        </Switch>
    );
}

export default Main;


