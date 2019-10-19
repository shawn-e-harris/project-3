import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import JournalReact from "./components/journalFolder/journalReact"
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
                    <Link to="/activities">Activities</Link>
                  </h1>
                </Container>
                <Container fixed >
                  <h1 className="homePage hades" >
                    <Link to="/journals">Journal</Link>
                  </h1>
                </Container>
              </div>
            );
          }
        } />
        <Route exact path="/journals" component={JournalReact} />
        <Route exact path="/activities" component={ActivityReact} />
        <Route exact path="/activities/:activity_id/users" component={UserReact} />
        {/* </Switch> */}
      </Router>
    </div>
  )
}