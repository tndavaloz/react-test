import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br />
          This will be a repo to help build with React.
        </p>
        <Welcome name="Nick" />
        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b>{' '}
          mode.
        </small>
        <form>
          <input
            type="hidden"
            defaultValue={process.env.REACT_APP_SECRET_CODE}
          />
        </form>
      </div>
    );
  }
}

export default App;
