import React, {Fragment} from 'react';

import Header from '../../components/Header';
import Main from './Main';
import Footer from '../../components/Footer';

export default props => {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    )

};