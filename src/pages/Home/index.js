import React, { Component, Fragment } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './Main'

import { graphql, compose } from 'react-apollo';
import { getProfileData } from '../../api/user';


class Home extends Component {

    render(){
                

        return (
            <Fragment>
                <Header />
                <Main />
                <Footer />
            </Fragment>   
        )
    }
     
}

export default Home

