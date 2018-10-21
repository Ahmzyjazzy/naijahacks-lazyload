import React from 'react';
import instImage from '../../assets/images/inst1.png';
import { Link } from 'react-router-dom'


export default props => {
  return (
    <main className="signupBg">
        <div className="row" style={{marginBottom: '0px',padding: '50px 100px'}}>
            <div className="col m5 formContainer" style={{}}>
              <h4 style={{textAlign:'center'}}>Create an account</h4>
              <p style={{textAlign: 'center'}}>or <Link to="/login" style={{textDecoration: 'underline'}} className="black-text">sign in to your account</Link></p>
              <form className="">
                <div className="input-field">
                  <input id="first_name" type="text" />
                  <label>Full Name</label>
                </div>
                <div className="input-field">
                  <input id="last_name" type="text"/>
                  <label>Phone</label>
                </div>
                <div className="input-field">
                  <input id="email" type="email"/>
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password"/>
                  <label>Password</label>
                </div>
                <div className="input-field">
                  <input id="password" type="password"/>
                  <label>Confirm Password</label>
                </div>
                <button style={{}} className="btn waves-effect waves-light" type="submit" name="action">Get Started
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
             <div className="col m7">      
              <div className="container">
                <img src={instImage} className="img-responsive"/>
                <div className="centered">Connect with your favourite instructor </div>
              </div>
            </div>
        </div>
    </main>
  )
};