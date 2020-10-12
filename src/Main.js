import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import CreateCustomer from './CreateCustomer';
import CreateUser from './CreateUser';
import CustomersList from './CustomersList';
import LogIn from "./LogIn";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route path='/registration' component={CreateUser}/>
            <Route path='/customers' component={CustomersList}/>
            <Route path='/login' component={LogIn}/>
            <Route exact path='/create' component={CreateCustomer}/>
        </Switch>
    );
}

export default Main;
