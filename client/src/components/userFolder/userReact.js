import React, { Component } from 'react'
import Axios from "axios"
import IndividualUserForm from "../user"


export default class UserReact extends Component {

    state = {
        users: []
    }

    // GET ALL USERS FROM SERVER
    getUsersFromServer = () => {
        Axios.get("/users") //get prefix
            .then(results => { //create promise
                this.setState({ users: results.data.allUsers })
                console.log(results)
                // console.table(results.data.allUsers)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // ADD USER TO SERVER
    addUserToServer = (user) => {
        Axios.post("/users", { user })
            .then(results => {
                this.setState({ results })
                console.log(results)

            })
            .catch(error => {
                console.log(error)
            })
    }

    // GET SINGLE USER FROM SERVER
    getSingleUserFromServer = (usersId) => {
        Axios.get(`/users/${usersId}`) //get prefix
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
                        <ul>
                            <li>
                                {user.userName}
                            </li>
                            <li>
                                {user.userLevel}
                            </li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}