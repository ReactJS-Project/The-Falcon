import React, { Component } from 'react';
import { Link, BrowserRouter, Route , Switch } from 'react-router-dom'
import Login from './forms/Login';
import NotFound from './NotFound';
import Register from './forms/register';



class Router extends Component {
    state = {}
    render() {
        return (
            <>
                <BrowserRouter>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>


                    <Switch>

                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route  component={NotFound} />
                    </Switch>


                </BrowserRouter>
            </>




        );
    }
}

export default Router;