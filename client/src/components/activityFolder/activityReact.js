import React, { Component } from 'react'
import Axios from "axios"
import IndividualActivityForm from "../activity"


export default class ActivityReact extends Component {

    state = {
        activities: []
    }

    // GET ALL ACTIVITIES FROM SERVER
    getActivitiesFromServer = () => {
        Axios.get("/activities") //get prefix
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
        Axios.post("/activities", { activity })
            .then(results => {
                this.setState({ results })
                console.log(results)

            })
            .catch(error => {
                console.log(error)
            })
    }

    // GET SINGLE ACTIVITY FROM SERVER
    getSingleActivityFromServer = (activitiesId) => {
        Axios.get(`/activities/${activitiesId}`) //get prefix
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

                <IndividualActivityForm
                    addNewIndividualActivityText={this.addNewActivity}
                    addNewIndividualEnergyLevel={this.addNewEnergyLevel}
                />
                {this.state.activities.map(activity => {
                    return (
                        <ul>
                            <li>
                                {activity.activityName}
                            </li>
                            <li>
                                {activity.activityLevel}
                            </li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}