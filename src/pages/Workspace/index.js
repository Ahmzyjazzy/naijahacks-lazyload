import React, {Fragment} from 'react';
import Header from '../../components/Header';
import EntityForm from '../../components/EntityForm';
import Footer from '../../components/Footer';


export default props => {
    return (
        <Fragment>
            <Header />
            <EntityForm />
            <Footer />
        </Fragment>
    )
};