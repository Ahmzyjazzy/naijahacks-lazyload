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
                  <div className="centered" style={{fontSize:'2em'}}>
                  In need of a skill and willing to learn?
                  Let us connect you with an instructor that have the skill you desire.
                  </div>
                </div>
              </div>
              <div className="col s12 m5 l5 formContainer">
                <h5 style={{textAlign:'center'}}>Create an account</h5>
                <p style={{textAlign: 'center', paddingBottom:'20px'}}>or <Link to="/login" style={{textDecoration: 'underline'}} className="black-text">sign in to your account</Link></p>
                <RegisterForm />
              </div>
              
          </div>
      </main>
    )
  }
  
};

