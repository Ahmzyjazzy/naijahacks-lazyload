import React from 'react';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import { createEntity, getEntity } from '../api/user';


class EntityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            entityName: '',
            description: '',
            avatar: '',
            coverPhoto: '',
            country: '',
            city: '',
            state: '',
            openingHours: '',
            socialLinks: '',
            entityType: '',
            docLink: '',
            isValidated: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createEntity({
            variables:{
                userId: this.state.userId,
                entityName: this.state.entityName,
                description: this.state.description,
                avatar: this.state.avatar,
                coverPhoto: this.state.coverPhoto,
                country: this.state.country,
                city: this.state.city,
                state: this.state.state,
                openingHours: this.state.openingHours,
                socialLinks: this.state.socialLinks,
                entityType: this.state.entityType,
                docLink: this.state.docLink,
                isValidated: this.state.isValidated,
            },
            //refetching query to update the ui
            refetchQueries: [{ query: getEntity }]
        });
    }

    render() {
        return (
            <form className="" >
                <div className="input-field col s12 m6">
                    <input id="first_name" type="text" />
                    <label>First Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="last_name" type="text"  />
                    <label>Last Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="phone" type="number" />
                    <label>Phone</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="email" type="email" />
                    <label>Email</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" type="password" />
                    <label>Password</label>
                </div>
                <div className="input-field col s12">
                    <input id="password2" type="password" />
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
        graphql(createEntity, {name:"createEntity"}),
        graphql(getEntity, {name:"getEntity"})
    )(EntityForm)
)

