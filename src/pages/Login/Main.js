import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import { APP_LOGO } from '../../constants'


export default class extends React.Component {

  render(){
    return (
    <Fragment>
        <main className="loginBg">
            <div className="flexParent">
                <section className="flexChild" style={{padding:'10%'}}>
                  <LoginForm email="" />          
                </section>
            </div>
            <p className="signupNav">Don't jave an account yet? <Link to="/signup">Sign up now!</Link></p>
            
        </main>
        
        </Fragment>
    )
  }
  
};

