import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./features/pages/Home";
import {About} from "./features/pages/About";
import React from "react";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path={'/home'} component={Home}>Home</Route>
                <Route exact path={'/about'} component={About}>About</Route>
            </Switch>
        </BrowserRouter>
    );
}