import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';
import devConfig from './config/config'
import IssuesContainer from './containers/issues-container';

class App extends Component {

  constructor(props) {
    super(props);

    this.store = configureStore(devConfig, {});

  }
  render() {
    return (
      <Provider store={this.store}>
        <IssuesContainer />
      </Provider>
    );
  }
}

export default App;
