import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Activity from './components/activity.js'
import User from './components/user.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Activity/>
    </div>
  );
}

export default App;
