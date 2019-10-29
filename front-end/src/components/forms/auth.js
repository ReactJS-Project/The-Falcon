import React , {Component} from 'react'
import SignatureCanvas from 'react-signature-canvas'
class Auth extends Component {
    state = {  }


    render() { 
        return (<div>
    <div style={{border:"1px solid" , width:500 , height:200}}>
 <SignatureCanvas penColor='green' canvasProps={{width: 500, height: 200}} />
 </div>
        
            </div>);
    }
}
 
export default Auth;