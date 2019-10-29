import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>

                <ul>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
        
                <ul>
                    <li>Keep in Touch</li>
                    <li><a href=""><i class="fab fa-facebook-square"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter-square"></i></a></li>
                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                </ul>

            </footer>
        )
    }
}
