import React, { Component, Fragment } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from '../pages/Home/Main'

class Layout extends Component {

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

export default Layout

