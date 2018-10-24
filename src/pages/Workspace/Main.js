import React from 'react';
// import instImage from '../../assets/images/inst1.png';
import { Link } from 'react-router-dom'
import EntityForm from './EntityForm'


const css = {
  minHeight: `${100 - 10}vh`,
  overFlow: 'hidden'
}
export default class extends React.Component {
  render(){
    return (
      <main className="signupBg" style={css}>
          <div className="row formParent" >
              <div className="col s12 m7 l7 hide-on-med-and-down">      
                <div className="container">
                  {/* <img src={instImage} className="img-responsive"/> */}
                  <div className="centered" style={{fontSize:'2em'}}>Do you have a space or a tutorial centre ? Where students can organise tutorials. Create your workspace with us to get your target audience.</div>
                </div>
              </div>
              <div className="col s12 m5 l5 formContainer">
                <h5 style={{textAlign:'center'}}>Create a workspace</h5>
                <EntityForm />
              </div>
              
          </div>
      </main>
    )
  }
  
};

