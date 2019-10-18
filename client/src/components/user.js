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

    addUserToServer = (userName) => {
        console.log(this.props.activityId)
        console.log(userName)


        Axios.post(`/activities/${this.props.activityId}/users/`, userName)
            .then(results => {
                this.setState({ userName: results.data.allUsers })
                console.log(userName)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <textarea
                    rows="4"
                    cols="50"
                    required
                    type="text"
                    placeholder="How do you feel about the activities listed?"
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
            individualUser: [""],
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
                <h1>Reviews</h1>
                <IndividualUserForm
                    activityId={this.props.activityId}
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