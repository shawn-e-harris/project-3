import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualUserForm from "../user"
// import RatingReact from "../ratingFolder/ratingReact"


export default class UserReact extends Component {

    state = {
        users: []
    }

    // GET ALL USERS FROM SERVER
    getUsersFromServer = (activity_id) => {
        Axios.get(`/api/activities/${activity_id}/users/`) //get prefix
            .then(results => { //create promise
                this.setState({users: results.data.allUsers})
                console.log(results.data.allUsers)
                // console.table(results.data.allUsers)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getUsersFromServer(this.props.match.params.activity_id);
    }

    render() {
        return (
            <div className="App">

                <IndividualUserForm
                    activityId={this.props.match.params.activity_id}
                    addNewIndividualUserText={this.addNewUser}
                />
                {this.state.users.map(user => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    {user.userName}
                                    {/* {RatingReact} */}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}