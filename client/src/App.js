import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Activities from './components/activity'


import './App.css';

const addActivityToServer = (activity) => {
  Axios.post("/activities", activity)
    .then(results => {
      this.setState({ results })
      console.log(results)

    })
    .catch(error => {
      console.log(error)
    })
}

const getUsersFromServer = (activity_id) => {
  Axios.get(`/activities/${activity_id}/users`) //get prefix
    .then(results => { //create promise
      this.setState({ results })
      console.log(results.data.allUsers)
      // console.table(results.data.allUsers)
    })
    .catch(error => {
      console.log(error)
    })
}

addUserToServer = (userName) => {
  // console.log({ activity_id })
  console.log(this.props.activityId)
  // console.log({ userName })
  console.log(userName)
}

export default class App extends React.Component {

  state = {
    activities: []
  }

  addNewUser = (userName) => {

    let userList = { ...this.state.userList }

    userList.individualUser.push(userName)
    // this.setState({individualUser: individualUser})
    // this.setState({hasEnteredUserText: true})
    this.setState({ userList })
  }

  addNewActivity = (activityName) => {

    let activityList = { ...this.state.activityList }

    activityList.individualActivity.push(activityName)
    // this.setState({individualActivity: individualActivity})
    // this.setState({hasEnteredActivityText: true})
    this.setState({ activityList })

  }

  updateActivity = (activity) => {
    
  }

  renderActivities = () => Activities(this.state.activities, this.addNewActivity)
  renderUser = () => User()

  render() {
    return (
      <div>
        <Router>
          {/* <Switch> */}

          <Link to="/">Home</Link>
          <Link to="/activities">Activity</Link>
          <Link to="/activities/users">User</Link>
          <Route exact path="/" render={
            () => {
              return (<h1>Lone Wolf</h1>);
            }
          } />
          <Route exact path="/activities" render={this.renderActivities} />
          {/* <Route exact path="/activities" rende={ActivityReact}/> */}
          <Route exact path="/activities/:activity_id/users" component={UserReact} />


          {/* </Switch> */}
        </Router>
      </div>
    )
  }
}
