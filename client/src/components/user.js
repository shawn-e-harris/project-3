import React from 'react';
import IndividualRatingForm from "./rating";

const individualUser = (text) => {
    return (
        <div>
            <p>{text}</p>
        </div>
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
        newUserText: "",
    }

    handleInputChange = (event) => {
        this.setState({ newUserText: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();

        this.props.addNewIndividualUserText(this.state.newUserText)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="text"
                    placeholder="New User"
                    value={this.state.newUserText}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Add User" />
            </form>
        )
    }
}

class AppUser extends React.Component {

    state = {
        userList: {
            individualUser: [""],
            hasEnteredUserText: false
        }
    }

    addNewUser = (newUserText) => {

        let userList = { ...this.state.userList }

        userList.individualUser.push(newUserText)
        this.setState({individualUser: individualUser})
        this.setState({hasEnteredUserText: true})
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
                {this.state.hasEnteredUserText ? <IndividualRatingForm
                    addNewIndividualRatingNumber={this.addNewRating}
                /> : null }
            </div>
        );
    }
}

export default AppUser;