import React from 'react';
import IndividualRatingForm from "./rating";
import Axios from "axios"

const individualUser = (text) => {
    return (
        <p>{text}</p>
    )
}

const userList = (showUser, userIndex) => {

    return (
        <div>
            {showUser.individualUser.map(individualUser)}
        </div>
    )
}

class IndividualUserForm extends React.Component {

    state = {
        userName: "",
    }

    handleInputChange = (event) => {
        this.setState({ userName: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.props.addNewIndividualUserText(this.state.userName)
    }

    addUserToServer = (activity_id, userName) => {
        // console.log({ activity_id })
        console.log(activity_id)
        // console.log({ userName })
        console.log(userName)
        

        Axios.post(`/activities/${activity_id}/users`, )
            .then(res => {
                // this.state({activity_id})
                // this.state({user})
                this.setState({ userName : res.data })
                console.log(userName)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="text"
                    placeholder="New User"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Add User" onClick={() => { this.addUserToServer(this.state) }} />
            </form>
        )
    }
}

class AppUser extends React.Component {

    state = {
        userList: {
            individualUser: [""]
            // hasEnteredUserText: false
        }
    }

    addNewUser = (userName) => {

        let userList = { ...this.state.userList }

        userList.individualUser.push(userName)
        // this.setState({individualUser: individualUser})
        // this.setState({hasEnteredUserText: true})
        this.setState({ userList })
    }

    render() {
        return (
            <div>
                <h1>User</h1>
                <IndividualUserForm
                    addNewIndividualUserText={this.addNewUser}
                />
                {userList(this.state.userList)}
                {/* {this.state.hasEnteredUserText ? <IndividualRatingForm
                    addNewIndividualRatingNumber={this.addNewRating}
                /> : null } */}
            </div>
        );
    }
}

export default AppUser;