import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualUserForm from "../user"


export default class UserReact extends Component {

    state = {
        users: []
    }

    // GET ALL USERS FROM SERVER
    getUsersFromServer = (activity_id) => {
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

    // ADD USER TO SERVER
    addUserToServer = (activity_id, user) => {
        Axios.post(`/activities/${activity_id}/users`, { user })
            .then(results => {
                this.setState({ results })
                console.log(results)

            })
            .catch(error => {
                console.log(error)
            })
    }

    // GET SINGLE USER FROM SERVER
    getSingleUserFromServer = (activity_id, user_id) => {
        Axios.get(`/activities/${activity_id}/users/${user_id}`) //get prefix
            .then(results => { //create promise
                this.setState({ users: results.data })
                console.log(results)
                console.table(results.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getUsersFromServer();
        // this.addUserToServer();
        // this.getSingleUserFromServer();
    }

    render() {
        return (
            <div className="App">

                <IndividualUserForm
                    addNewIndividualUserText={this.addNewUser}
                />
                {this.state.users.map(user => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    {/* <Link to="/activities/${activity_id}/users/${user_id}">{user.userName}</Link> */}
                                    {user.userName}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}