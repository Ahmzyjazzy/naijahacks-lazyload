import React from 'react';
// import instImage from '../../assets/images/inst1.png';
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'


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
                  <div className="centered" style={{fontSize:'2em'}}>Are you a scholar, graduate or professional in any field of study? 
                  Use your skills to earn money and get connected to people that need your service.</div>
                </div>
              </div>
              <div className="col s12 m5 l5 formContainer">
                <h5 style={{textAlign:'center'}}>Create an instructor account</h5>
                <RegisterForm />
              </div>
              
          </div>
      </main>
    )
  }
  
};

