import React, { Component } from 'react';
import {   Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div class="header">

                <Link to={"/"}>
                    <img src="images/logo.png" width="181" height="45"/>
                </Link>
        
                <ul>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">OUR SERVICES</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>

                <div className="dashboard-link">
                    <Link to={"/dash"}>Dashboard</Link><br></br>
                </div>

                <div class="log-in">
                    <Link to={"/login"}>Log in</Link>
                </div>

            </div>
        )
    }
}
