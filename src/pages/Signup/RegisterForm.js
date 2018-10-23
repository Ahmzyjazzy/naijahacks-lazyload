import React from 'react';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import { createUser, getProfileData } from '../../api/user';

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
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createUser({
            variables:{
                fullName: `${this.state.first_name} ${this.state.last_name}` ,
                email:  this.state.email,
                password: this.state.password,
                phoneNumber: this.state.phone,
            },
            //refetching query to update the ui
            refetchQueries: [{ query: getProfileData }]
        });  
    }

    render() {
        console.log(this.props, this.props.match);

        return (
            <form className="" onSubmit={ this.handleSubmit }>
                <div className="input-field col s12 m6">
                    <input id="first_name" type="text" onChange={(e)=> this.setState({first_name: e.target.value})} />
                    <label>First Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="last_name" type="text" onChange={(e)=> this.setState({last_name: e.target.value})} />
                    <label>Last Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="phone" type="number" onChange={(e)=> this.setState({phone: e.target.value})} />
                    <label>Phone</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="email" type="email" onChange={(e)=> this.setState({email: e.target.value})} />
                    <label>Email</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" type="password" onChange={(e)=> this.setState({password: e.target.value})} />
                    <label>Password</label>
                </div>
                <div className="input-field col s12">
                    <input id="password2" type="password" onChange={(e)=> this.setState({password2: e.target.value})} />
                    <label>Confirm Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Register
                    <i className="material-icons right">send</i>
                </button>
              </form>
        );
    }
}

export default withRouter(
    compose(
        //binding multiple queries to one component
        graphql(createUser, {name:"createUser"}),
        graphql(getProfileData, {name:"getProfileData"})
    )(RegisterForm)
)

