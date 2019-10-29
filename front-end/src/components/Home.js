import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Options from "./Options"
export default class Home extends Component {
  render() {
      console.log('this.props.state', this.props.state)
    return (
      <div>
        <Options />

        {/* <Link to={"/details"}>DetailsPage</Link> */}
        
      </div>
    )
  }
}
