import React, {Fragment} from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LoginLayout from './Main'

export default class extends React.Component {

  render(){
    
    return (
      <Fragment>
        <Header />
        <LoginLayout />
        <Footer />
      </Fragment>  
    )
  }
  
};