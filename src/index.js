import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'

import(/* webpackChunkName: 'app' */ './pages/App')
    .then(({default: App})=>
        render(
            <App />,
            document.getElementById('root')
        )
    )


