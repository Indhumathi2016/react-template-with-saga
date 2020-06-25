import React from 'react';
import logo from '../logo.svg';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";

function App() {
  function onCall() {
    store.dispatch({type: actions.GET_USER});
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>
          <NavLink to="/user/1">Test</NavLink>
        </Button>
        <Button onClick={onCall}>Call</Button>
      </header>
    </div>
  );
}

export default App;
