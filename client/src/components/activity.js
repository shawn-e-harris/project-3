import React, { Component } from 'react';
import Users from './user'

const addUserToActivity = (updateActivity) => (activity) => (newUser) => {
    const newActivity = {...activity};

    if(!newActivity.users < newActivity.users.length < 1)
        newActivity.users = [newUser];
    else
        newActivity.users.push(newUser);

    updateActivity(newActivity)
}

const individualActivity = (addNewUser) => (activity) => {
    return (
        <div>
            <p>{activity.activityName} - {activity.activityLevel}</p>
            {Users(activity.users, addNewUser(activity))}
        </div>
    )
}

const activityList = (activities, updateActivity) => {

    return (
        <div>
            {activities.map(individualActivity(addUserToActivity(updateActivity)))}
        </div>
    )
}

class IndividualActivityForm extends Component {

    state = {
        activityName: "",
        activityLevel: ""
    }

    handleInputChange = (event) => {
        this.setState({ activityName: event.target.value })
    }

    handleRadioChange = (event) => {
        this.setState({ activityLevel: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.props.addNewActivity(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="text"
                    placeholder="New Activity"
                    value={this.state.activityName}
                    onChange={this.handleInputChange}
                />
                <br></br>
                <input
                    type="radio"
                    name="energyLevel"
                    value="Low"
                    checked={this.state.activityLevel === "Low"}
                    onChange={this.handleRadioChange}
                />

                <label>Low</label>
                <input
                    type="radio"
                    name="energyLevel"
                    value="Medium"
                    checked={this.state.activityLevel === "Medium"}
                    onChange={this.handleRadioChange}
                />
                <label>Medium</label>
                <input
                    type="radio"
                    name="energyLevel"
                    value="High"
                    checked={this.state.activityLevel === "High"}
                    onChange={this.handleRadioChange}
                />
                <label>High</label>
                <br></br>
                <input type="submit" value="Add Activity" />

                {/* <Button className={styling.button}/> */}
            </form>
        )
    }
}

export default (activities, addNewActivity, updateActivity) => (
    <div>
        <h1>Activity</h1>
        <IndividualActivityForm
            addNewActivity={addNewActivity}
        />
        {activityList(activities, updateActivity)}
        {/* {this.state.hasEnteredActivityText ? <IndividualUserForm
                    addNewIndividualUserText={this.addNewUser}
                /> : null } */}
    </div>
);