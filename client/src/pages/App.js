import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Workspace from '../pages/Workspace'
import Instructor from '../pages/Instructor'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create-workspace" component={Workspace} />
        <Route path="/instructor-signup" component={Instructor} />
        <Route path="/signup" component={Signup} />
      </Switch>
    )
  }
}

export default App;
