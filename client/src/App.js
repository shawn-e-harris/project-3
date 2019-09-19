import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Activity from './components/activity.js'
// import User from './components/user.js'
import Rating from './components/rating.js'
import Review from './components/review.js'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Activity/> */}
      <Rating/>
      <Review/>
    </div>
  );
}

export default App;
