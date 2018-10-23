import React, { Component, Fragment } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './Main'

import { graphql, compose } from 'react-apollo';
import { getProfileData } from '../../api/user';


class Home extends Component {

    render(){
        
        const userInfo = window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : "";
        
        return (
            <Fragment>
                <Header data={userInfo} />
                <Main />
                <Footer />
            </Fragment>   
        )
    }
     
}

export default Home

