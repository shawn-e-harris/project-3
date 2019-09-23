import React from 'react';
import IndividualRatingForm from "./rating";
import Axios from "axios"

const individualUser = (user) => {
    return (
        <p>{user.userName}</p>
    )
}

const userList = (users, userIndex) => {

    return (
        <div>
            {users.map(individualUser)}
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
        this.props.addNewUser(this.state)
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
                <input type="submit" value="Add User" />
            </form>
        )
    }
}

export default (users, addNewUser) => (
    <div>
        <h1>User</h1>
        <IndividualUserForm
            addNewUser={addNewUser}
        />
        {userList(users)}
        {/* {this.state.hasEnteredUserText ? <IndividualRatingForm
                    addNewIndividualRatingNumber={this.addNewRating}
                /> : null } */}
    </div>
);