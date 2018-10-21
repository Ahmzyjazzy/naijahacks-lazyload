import React, {Fragment} from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './Main'

export default props => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>   
  )
};