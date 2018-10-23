import React from 'react';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import { getProfileDataByEmail } from '../../api/user';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          confirmMail: '',
      };
      this.email = '';
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const userInfo = window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : "";
        if(userInfo){
            (userInfo.email.trim() == this.state.email.trim()) && (userInfo.password.trim() == this.state.password.trim()) ? this.props.history.push("/") : M.toast({html: 'Username or password incorrect'});
        }else{
           return M.toast({html: 'Username or password incorrect'}); 
        }    
    }

    render() {

        return (
            <form className="" onSubmit={ this.handleSubmit }>                
                <div className="input-field col s12 m6">
                    <i className="material-icons prefix">mail</i>
                    <input id="email" type="email" required={true} onChange={(e)=> this.setState({email: e.target.value})} />
                    <label>Email</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" required={true} onChange={(e)=> this.setState({password: e.target.value})} />
                    <label>Password</label>
                </div>
                <button className="btn waves-effect waves-light loginBtn" type="submit" name="action">Login
                    <i className="material-icons right">send</i>
                </button>
            </form>
        );
    }
}

export default withRouter(LoginForm)

