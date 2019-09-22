import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import AppActivity from './components/activity.js'
// import AppUser from './components/user.js'
// import AppRating from './components/rating.js'
import IndividualReviewForm from './components/review.js'
import ActivityReact from "./components/activityFolder/activityReact"
import UserReact from "./components/userFolder/userReact"
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        {/* <Switch> */}
<Route path="/home"/> Introvert Oasis
          <Route exact path="/" component={ActivityReact}/>
          <Route exact path="/activities/" component={UserReact}/>
          

        {/* </Switch> */}
      </Router>
    </div>
  )
}
