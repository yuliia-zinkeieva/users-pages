import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './mainPages/Home';
import CreateCustomer from './mainPages/CreateCustomer';
import Registration from './mainPages/Registration';
import CustomersList from './mainPages/CustomersList';
import LogIn from './mainPages/LogIn';
import PrivateRoute from './utils/PrivateRoute';
import ErrorPage from './mainPages/ErrorPage';
import EditCustomer from './mainPages/EditCustomer';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route path='/registration' component={Registration}/>
            <Route path='/customers' component={CustomersList}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/error' component={ErrorPage}/>
            <PrivateRoute exact path='/create' component={CreateCustomer}/>
            <PrivateRoute exact path='/edit' component={EditCustomer}/>
        </Switch>
    );
}

export default Main;


