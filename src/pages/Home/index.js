import React, { Component, Fragment } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomaLayout from './Main'

class Layout extends Component {

    render(){
        return (
            <Fragment>
                <Header />
                <HomaLayout />
                <Footer />
            </Fragment>   
        )
    }
     
}

export default Layout

