import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PersonalPage from './PersonalPage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={PersonalPage}/>
    </Switch>
  );
}

export default Main;


//<Route exact path = {"/" + route} component={PersonalPage}></Route>