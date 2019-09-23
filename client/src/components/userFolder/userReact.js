import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualUserForm from "../user"


export default class UserReact extends Component {

    state = {
        users: []
    }

    // GET ALL USERS FROM SERVER


    componentDidMount() {
        this.getUsersFromServer(this.props.match.params.activity_id);
        // this.addUserToServer();
        // this.getSingleUserFromServer();
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
                                    {/* <Link to="/activities/${activity_id}/users/${user_id}">{user.userName}</Link> */}
                                    {user.userName}
                                    {/* {userList(this.state.userList)} */}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}