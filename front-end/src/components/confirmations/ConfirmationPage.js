import React, { Component } from 'react'
import DetailsPage from './DetailsPage';
import { BrowserRouter, Route, Link , Redirect } from "react-router-dom";


export default class ConfirmationPage extends Component {
    // componentDidMount=()=>{
    //     this.selectHandler()
    // }
    state ={
        selectedObject : undefined ,
         check:false
    }
    // selectHandler=(event)=>{
        // this.setState({
        //     selectedObject : event
        // })
        // this.props.selectedDetails(event);
        // <Redirect to={{pathname: "/details" , state:this.state.initConf}}/>

        // console.log(event)
    // }
    
    render() {
        // console.log("ConfirmationPage" , this.props.initConf)
        return (
            <>
             
            <tbody>
              
            <tr >
            <td >    {this.props.index}  </td>     
                  
            <td>    {this.props.initConf.make }  </td>
            <td>     {this.props.initConf.model} </td>
             <td>   {this.props.initConf.year}</td>
            <td>    {this.props.initConf.licensePlate }</td>
             <td>   {this.props.initConf.additionalINFO === undefined ? "The Data Not Avaliable Yet" : this.props.initConf.additionalINFO.buyerKey }</td>
             <td>   {this.props.initConf.ownerTransactionKey}</td>
            <td >
                {/* <a href="#" style={{textDecoration:"none", border:"none" , }}>
                        More information
                </a> */}
                {/* <Link to={"/details"} onClick={this.selectHandler.bind(this,this.props.initConf)} >DetailsPage</Link> */}
                {/* <Link to={{pathname:"/details" , state:this.state.initConf}} >DetailsPage</Link> */}
                <button onClick={()=>{this.setState({check:true})}}>Detailes</button>
                {(this.state.check)?<Redirect to={{pathname:"/details" , state:this.props.initConf}}/>:null}
                
            </td>
             </tr>
            
               </tbody>
                 {/* <DetailsPage selectedDetails={this.props.initConf}></DetailsPage> */}

          <BrowserRouter>
          {/* <Route path= "/details" component={DetailsPage}></Route> */}
               {/* <Route  path="/details" component={()=> <DetailsPage selectedObject={this.state.selectedObject}></DetailsPage>}></Route> */}
            </BrowserRouter>
            </>
        )
    }
    } 
