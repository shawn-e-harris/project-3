import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import AppActivity from './components/activity.js'
import AppUser from './components/user.js'
// import AppRating from './components/rating.js'
import AppReview from './components/review.js'
import './App.css';

// function App() {
//   return (
//     <div>
//       <AppActivity/>
//       <AppUser/>
//       {/* <AppRating/> */}
//       <AppReview/>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={AppUser} />

        </Switch>
      </Router>
    </div>
  )
}
