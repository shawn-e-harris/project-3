import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualHadesActivityForm from "./hades"

export default class HadesActivityReact extends Component {

    state = {
        activities: []
    }

    // GET ALL ACTIVITIES FROM SERVER
    getActivitiesFromServer = () => {
        Axios.get(`/hades`) //get prefix
            .then(results => { //create promise
                this.setState({ activities: results.data.allActivities })
                console.log(results)
                // console.table(results.data.allActivities)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // ADD ACTIVITY TO SERVER
    addActivityToServer = (activity) => {
        Axios.post(`/hades`, { activity })
            .then(results => {
                this.setState({ results })
                console.log(results)

            })
            .catch(error => {
                console.log(error)
            })
    }

    // GET SINGLE ACTIVITY FROM SERVER
    getSingleActivityFromServer = (activity_id) => {
        Axios.get(`/hades/${activity_id}`) //get prefix
            .then(results => { //create promise
                this.setState({ activities: results.data })
                console.log(results)
                console.table(results.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getActivitiesFromServer();
        // this.addActivityToServer();
        // this.getSingleActivityFromServer();
    }

    render() {
        return (
            <div className="App">

                <IndividualHadesActivityForm
                
                    addNewIndividualActivityText={this.addNewActivity}
                    addNewIndividualEnergyLevel={this.addNewEnergyLevel}
                />
                {this.state.activities.map(activity => {
                    return (
                        <div>
                        <ul>
                            <li>
                            <Link to={`/hades/${activity._id}/users`}>{activity.activityName}</Link>
                            </li>
                            <li>
                                {activity.activityLevel}
                            </li>
                        </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}