import React, { Component } from 'react';
import axios from 'axios';


class Router extends Component {
    state = { email: null, password: null }
    getData = (e) => {

        this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state); })
    }
    loginMethod = () => {
        axios.post("http://localhost:3020/login", this.state).then((data) => { console.log(data.data); });
    }
    state = {}
    render() {
        return (
            <div>
                <input type="email" name="email" onChange={this.getData} />
                <input type="password" name="password" onChange={this.getData} />
                <button type="submit" onClick={this.loginMethod}>Login</button>
            </div>

        );
    }
}

export default Router;