
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import CreateInvoice from "../views/CreateInvoice";
import EditInvoice from "../views/EditInvoice";
import History from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={CreateInvoice} />
                    <Route path="/edit" component={EditInvoice} />
                </Switch>
            </Router>
        )
    }
}
