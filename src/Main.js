import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './mainPages/Home';
import CreateCustomer from './mainPages/CreateCustomer';
import Registration from './mainPages/Registration';
import CustomersList from './mainPages/CustomersList';
import LogIn from "./mainPages/LogIn";

//todo: protected route
const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route path='/registration' component={Registration}/>
            {/*rename?????*/}
            <Route path='/customers' component={CustomersList}/>
            <Route path='/login' component={LogIn}/>
            <Route exact path='/create' component={CreateCustomer}/>
        </Switch>
    );
}

export default Main;

//todo:redirect via history, go to readMe
