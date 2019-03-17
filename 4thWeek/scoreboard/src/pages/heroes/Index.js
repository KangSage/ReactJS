import React, {Fragment} from 'react';
import {Nav, NavItem} from "reactstrap";
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import {Register} from "./Register";
import {Heroes} from "./Heroes";

export class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <Nav className="mb-3">
                    <NavItem>
                        <NavLink to="/heroes/hero" className="nav-link">Hero List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
                    </NavItem>
                </Nav>
                <Switch>
                    <Route path="/heroes/hero" component={Heroes}></Route>
                    <Route path="/heroes/register" component={Register}></Route>
                    <Route path="/heroes" render={() => <Redirect to="/heroes/hero"></Redirect>}></Route>
                </Switch>
            </Fragment>
        )
    }
}