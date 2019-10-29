import React, { Component } from 'react';
class Register extends Component {
    state = {copyID:null}
    changeValues=(event)=>
    {
        this.setState({[event.target.name]  :event.target.files[0] } , ()=>{console.log(this.state.copyID);})
    }
    regester=()=>
    {
        let data = new FormData();
        data.append('file',this.state.copyID);
    }
    render() {
        return (<div>
            <input name="copyID" type="file" accept="application/pdf" onChange = {this.changeValues}/>
            <button onClick={this.regester}>Regester</button>
        </div>);
    }
}
export default Register;




