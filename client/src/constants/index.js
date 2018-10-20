import React, { Fragment } from 'react';
import { Icon4 } from '../helpers/svg';

const APP_NAME = 'Connecto';

const APP_LOGO = (()=> {
    return (
        <Fragment>
          <Icon4 align="center" /><span style={{color:'#fff'}}>onnecto</span>  
        </Fragment>        
    )
})();



export {
    APP_NAME,
    APP_LOGO
}