import React from 'react';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import { createUser } from '../../api/user';
import { withContext } from '../../context'

class EntityForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        "id": '',
        "entityName": '',
        "description": '',
        "country": '',
        "state": '',
        "city": '',
        "entityType": "workspace",
        "docLink": "",
        "isValidated": false,
        "userId": this.userId
      };
      // preserve the initial state in a new object
      this.baseState = this.state   
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createEntity = {
                "entityName": this.state.entityName,
                "description": this.state.description,
                "country": this.state.country,
                "state": this.state.state,
                "city": this.state.city,
                "entityType": "workspace",
                "docLink": "",
                "isValidated": false,
                "userId": this.userId
        }

            console.log('...now navigate to login page', res.data);
            M.toast({html: 'WorkSpace Created successfully!'})
            this.setState(this.baseState)
    } 

    render() {

        return (
            <form className="" onSubmit={ this.handleSubmit }>
                <div className="input-field col s12">
                    <input id="entityName" type="text" required={true} value={this.state.entityName} onChange={(e)=> this.setState({entityName: e.target.value})} />
                    <label>Name</label>
                </div>
                <div className="materialize-textarea col s12">
                    <textarea id="description" required={true} value={this.state.description} onChange={(e)=> this.setState({description: e.target.value})}>
                    </textarea>
                    <label>Work Space Description</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="country" type="text" required={true} value={this.state.country} onChange={(e)=> this.setState({country: e.target.value})} />
                    <label>Country</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="state" type="text" required={true} value={this.state.state} onChange={(e)=> this.setState({state: e.target.value})} />
                    <label>State</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="city" type="text" required={true} value={this.state.city} onChange={(e)=> this.setState({city: e.target.value})} />
                    <label>City</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="entityType" type="text" value={this.state.entityType} disabled />
                    {/* <label>Entity Type</label> */}
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Create Workspace
                    <i className="material-icons right">send</i>
                </button>
              </form>
        );
    }
}

export default EntityForm