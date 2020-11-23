import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
