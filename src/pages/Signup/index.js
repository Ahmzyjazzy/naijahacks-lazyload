import React, {Fragment} from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SignupLayout from './Main'

export default props => {
  return (
    <Fragment>
      <Header />
      <SignupLayout />
      <Footer />
    </Fragment>   
  )
};