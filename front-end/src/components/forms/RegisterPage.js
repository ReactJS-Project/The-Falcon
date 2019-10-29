import React, { Component } from "react";
import axios from 'axios'

export default class RegisterPage extends Component {
  state = {
    /*
     id: 1, firstName: "Mohammad", secondName: "Yousef", middleName: "Samih", lastName: "Albitar",
          phoneNumbers: ["077777777777", "077777777855"],
          email: "mohammad@example.com", password: "12345687@as",
          uploadID: "ID.pdf"
    */
    id: null,
    firstName: null,
    secondName: null,
    middleName: null,
    lastName: null,
    phoneNumbers: [],
    phoneNumberOne:null,
    phoneNumberTwo:null,
    email: null,
    password: null,
    passwordConf: null,
    uploadID: null,
    roles: false
  };

  readInput = event => {
    if (event.target.name === "phoneNumberOne" || (event.target.name === "phoneNumberTwo" && event.target.value  !== null)) {

      this.setState({[event.target.name] : event.target.value});
      
      // console.log(this.state.phoneNumbers);
      // console.log(event.target.name);
    
    } 
    // else if(event.target.name === "uploadID")
    // {
    //     // this.setState({[event.target.name]:event.target.files[0]},()=>{console.log(this.state.uploadID)})
    //     this.setState({[event.target.name]:event.target.value},()=>{console.log(this.state.uploadID)})
    // }
    else {
     
      this.setState({ [event.target.name]: event.target.value });
    }
  };
  submitFunc = () => {



  


        if (this.state.password === this.state.passwordConf) {
          
          // axios.post("http://localhost:3020/register" , this.state).then((res)=>{console.log(res.data);})
          

          if(this.state.phoneNumberTwo===null || this.state.phoneNumberTwo === "")
          {
            this.setState({phoneNumbers:this.state.phoneNumbers.concat(this.state.phoneNumberOne)},()=>
            {
              axios.post("http://localhost:3020/register" , this.state).then((res)=>{console.log(res.data);});
              this.setState({phoneNumbers:[]});

            })

          

          }
          else
          {
            let phonesNumbers = [this.state.phoneNumberOne ,this.state.phoneNumberTwo]
            this.setState({phoneNumbers:phonesNumbers},()=>
            {
              axios.post("http://localhost:3020/register" , this.state).then((res)=>{console.log(res.data);});
              this.setState({phoneNumbers:[]});

              

            })


          }
          
        //  this.state.phoneNumbers.push(this.state.phoneNumberOne)
        //  this.setState({
        //   phoneNumbers : this.state.phoneNumbers
        // })
        //   if(this.state.phoneNumberTwo !== null){
        //     this.state.phoneNumbers.push(this.state.phoneNumberTwo )
        //     this.setState({
        //       phoneNumbers : this.state.phoneNumbers
        //     })
        //   }
          

    }
   
  };

  uploadFile=(event)=>
  {
      console.log(event.target.files[0])

  }

  render() {
    return (
      <div className='register-page'>
        <div>RegisterPage</div>

        <label>Full Name </label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.readInput}
        />
        <input
          type="text"
          name="secondName"
          placeholder="Second Name"
          onChange={this.readInput}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Third Name"
          onChange={this.readInput}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Fourth Name"
          onChange={this.readInput}
        />
        <br />
        <label>Phone Numbers </label>
        <input
          type="text"
          name={"phoneNumberOne"}
          placeholder="Your Phone Number"
          onChange={this.readInput}
        />
        <label>Secondary Phone Number </label>
        <input
          type="text"
          name={"phoneNumberTwo"}
          placeholder="Secondary Number"
          onChange={this.readInput}
        />
        <br />
        <label>E-mail </label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={this.readInput}
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={this.readInput}
        />
        <label>Confirm Password </label>
        <input
          type="password"
          name="passwordConf"
          placeholder="Confirm password"
          onChange={this.readInput}
        />
        <br />
        <label>Upload ID***</label>
        <input
          type="file"
          name="uploadID"
          accept="application/pdf"
          onChange={this.readInput}
        />
        <br />
        <button onClick={this.submitFunc}>Register Button</button>
      </div>
    );
  }
}
