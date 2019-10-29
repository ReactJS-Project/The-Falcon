import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import DashboardPage from "../dashboard/DashboardPage"
import cookie from "react-cookies"

export default class LoginPage extends Component {

    state = {email: null, password: null , userID:null, message:null}
    getData = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }

    loginMethod = () => {
        let userAccount = {email:this.state.email , password:this.state.password};
        axios.post("http://localhost:3020/login", userAccount).then((response) => { 
          
                if(response.data === null)
                {
                    this.setState({message:"Invalid Email Or Password"})

                }
                else
                {
                 cookie.save('isLoggedIn',response.data);

                    this.setState({userID:response.data , message:""}) ;



                }
            
       
    
    });


    }

    render() {
        return ( 
            <div className="login-page">
                <input type="email" name="email" onChange={this.getData} placeholder="Enter your e-mail address"/>
                <input type="password" name="password" onChange={this.getData} placeholder="Enter your password"/>
                <button onClick={this.loginMethod}>OK</button>
                <div style={{color:"red"}}>{(this.state.userID !== null)?<Redirect to={{pathname:'/dash'}}/>:this.state.message}</div>
                <p>Don't have an account? <a href="#">Click Here</a></p>
                <a href="#">Forgot you password?</a>
            </div>
        )
    }
}
