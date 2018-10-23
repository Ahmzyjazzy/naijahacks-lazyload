import React from 'react';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import { createUser } from '../../api/user';

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          first_name: '',
          last_name:'',
          phone: '',
          email: '',
          password: '',
          password2: '',
      };
      // preserve the initial state in a new object
      this.baseState = this.state   
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.userInfo = {};
    }


  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.userInfo = {
            fullName: `${this.state.first_name} ${this.state.last_name}` ,
            email:  this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phone,
        } 
        window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.setState(this.baseState)
        M.toast({html: 'Registration successful! You can login with your credentials'});
    } 

    render() {

        return (
            <form className="" onSubmit={ this.handleSubmit }>
                <div className="input-field col s12 m6">
                    <input id="first_name" type="text" required={true} value={this.state.first_name} onChange={(e)=> this.setState({first_name: e.target.value})} />
                    <label>First Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="last_name" type="text" required={true} value={this.state.last_name} onChange={(e)=> this.setState({last_name: e.target.value})} />
                    <label>Last Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="phone" type="number" required={true} value={this.state.phone} onChange={(e)=> this.setState({phone: e.target.value})} />
                    <label>Phone</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="email" type="email" required={true} value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} />
                    <label>Email</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" type="password" required={true} value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})} />
                    <label>Password</label>
                </div>
                <div className="input-field col s12">
                    <input id="password2" type="password" required={true} value={this.state.password2} onChange={(e)=> this.setState({password2: e.target.value})} />
                    <label>Confirm Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Register
                    <i className="material-icons right">send</i>
                </button>
              </form>
        );
    }
}

export default withRouter((RegisterForm));

