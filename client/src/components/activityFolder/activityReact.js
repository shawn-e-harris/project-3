import React, { Component } from 'react'
import Axios from "axios"
import IndividualActivityForm from "../activity"


export default class ActivityReact extends Component {

    state = {
        activities: []
    }

    getActivitiesFromServer = () => {
        Axios.get("/activities") //get prefix
            .then(results => { //create promise
                this.setState({ activities: results.data.allActivities })
                console.log(results)
                console.table(results.data.allActivities)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getSingleActivityFromServer = () => {
        Axios.get("/activities/activitiesId") //get prefix
            .then(results => { //create promise
                // this.setState({ activities: results.data })
                console.log(results)
                // console.table(results.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // componentDidMount() {
    //     this.getSingleActivityFromServer();
    // }

    componentDidMount() {
        this.getActivitiesFromServer();
    }

    // getActivitiesFromServer() {
    //     getActivitiesFromServer.then(allActivities => {

    //     })
    // }

    changeTheWorld = (newTitle) => {
        this.setState({ title: newTitle })
    }
    render() {
        return (
            <div className="App">
                Hellooooooo
                <IndividualActivityForm
                    addNewIndividualActivityText={this.addNewActivity}
                />
                {this.state.activities.map(activity => {
                    return (
                        <div>
                            <p>
                                {activity._id}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}