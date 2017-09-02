import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import { Subscribe, ThankYou } from './Pages';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Route path="/" exact component={Subscribe} />
				<Route path="/thanks" exact component={ThankYou} />
      </div>
    );
  }
}

export default App;
