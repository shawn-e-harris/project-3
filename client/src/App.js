import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReviewReact from "./components/reviewFolder/reviewReact"
import ActivityReact from "./components/activityFolder/activityReact"
import UserReact from "./components/userFolder/userReact"
import Container from '@material-ui/core/Container';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        {/* <Switch> */}

        {/* <Link to="/">Home</Link> */}
        <Link to="/">Home</Link>
        <Route exact path="/" render= {
          () => {
            return (
              <div>
                <h1>Lone Wolf</h1>
                <Container fixed >
                  <h1 className="homePage zeus">
                    <Link to="/api/activities">Activities</Link>
                  </h1>
                </Container>
                <Container fixed >
                  <h1 className="homePage hades" >
                    <Link to="/api/reviews">Journal</Link>
                  </h1>
                </Container>
              </div>
            );
          }
        } />
        <Route exact path="/api/reviews" component={ReviewReact} />
        <Route exact path="/api/activities" component={ActivityReact} />
        <Route exact path="/api/activities/:activity_id/users" component={UserReact} />
        {/* </Switch> */}
      </Router>
    </div>
  )
}