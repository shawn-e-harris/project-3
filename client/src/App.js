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

        <Link to="/">Home</Link>
        <Link to="/activities">Activity</Link>
        {/* <Link to="/activities/:activity_id/users">User</Link> */}
<Route exact path="/" render={
  () => {
    return (<h1>Lone Wolf</h1>);
  }
}/>
          <Route exact path="/activities" component={ActivityReact}/>
          <Route exact path="/activities/:activity_id/users" component={UserReact}/>
          

        {/* </Switch> */}
      </Router>
    </div>
  )
}