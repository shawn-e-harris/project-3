import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import AppActivity from './components/activity.js'
// import AppUser from './components/user.js'
// import AppRating from './components/rating.js'
import IndividualReviewForm from './components/review.js'
import ActivityReact from "./components/activityFolder/activityReact"
import UserReact from "./components/userFolder/userReact"
import Home from "./components/home"
import Container from '@material-ui/core/Container';

import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        {/* <Switch> */}

        {/* <Link to="/">Home</Link> */}
        <Link to="/activities">Activity</Link>
        <Route exact path="/" render={
          () => {
            return (
              <div>
                <h1>Lone Wolf</h1>
                <Container fixed >
                <h1 className="homePage zeus">
                      <Link to="/zeus">Zeus</Link>
                    </h1>
                    </Container>
                    <Container fixed >
                    <h1 className="homePage hades" >
                        <Link to="/hades">Hades</Link>
                    </h1>
                </Container>
                
                {Home}
              </div>
            );
          }
        } />
        {/* <Route exact path="/activities" component={ActivityReact} />
        <Route exact path="/activities/:activity_id/users" component={UserReact} /> */}


        {/* </Switch> */}
      </Router>
    </div>
  )
}