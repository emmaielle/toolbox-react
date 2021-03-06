import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './containers/home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
            path="/"
            component={HomeComponent}
        />
      </Switch>
    );
  }
}

export default App;
