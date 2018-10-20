import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import(/* webpackChunkName: 'app' */ './pages/App')
    .then(({default: App})=>
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
            ,
            document.getElementById('root')
        )
    )


