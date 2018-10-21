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

const THEME_BG_COLOR = 'linear-gradient(57deg, rgb(233, 30, 99) 0%, rgb(30, 77, 146) 100%) !important'

const APP_DEFAULT_PORT = 7000

export {
    APP_NAME,
    APP_LOGO,
    THEME_BG_COLOR,
    APP_DEFAULT_PORT
}