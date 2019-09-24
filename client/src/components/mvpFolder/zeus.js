import React, { Component } from 'react';
import Axios from "axios"

const individualActivity = (text) => {
    return (
        <p>{text}</p>
    )
}

const energyLevel = (text) => {
    return (
        <p>{text}</p>
    )
}

const activityList = (showActivity, activityIndex) => {

    return (
        <div>
            {showActivity.individualActivity.map(individualActivity)}
            {showActivity.energyLevel.map(energyLevel)}
        </div>
    )
}

class IndividualZeusActivityForm extends Component {

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
        this.props.addNewIndividualActivityText(this.state.activityName)
        this.props.addNewIndividualEnergyLevel(this.state.activityLevel)
    }

    addActivityToServer = (activity) => {
        console.log({ activity })
        console.log(activity)

        Axios.post("/zeus", activity)
            .then(results => {
                this.setState({ results })
                console.log(results)

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    required
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
                <input type="submit" value="Add Activity" onClick={() => { this.addActivityToServer(this.state) }} />

            </form>
        )
    }
}

class AppZeusActivity extends React.Component {

    state = {
        activityList: {
            individualActivity: [""],
            energyLevel: [""],
            // hasEnteredActivityText: false
        }
    }

    addNewActivity = (activityName) => {

        let activityList = { ...this.state.activityList }

        activityList.individualActivity.push(activityName)
        // this.setState({individualActivity: individualActivity})
        // this.setState({hasEnteredActivityText: true})
        this.setState({ activityList })

    }

    addActivityLevel = (activityLevel) => {

        let activityList = { ...this.state.activityList }

        activityList.energyLevel.push(activityLevel)
        // this.setState({individualActivity: individualActivity})
        // this.setState({hasEnteredActivityText: true})
        this.setState({ activityList })

    }

    

    render() {
        return (
            <div>
                <h1>Activity</h1>
                <IndividualZeusActivityForm
                    addNewIndividualActivityText={this.addNewActivity}
                    addNewIndividualEnergyLevel={this.addActivityLevel}

                />
                {activityList(this.state.activityList)}
                {/* {this.state.hasEnteredActivityText ? <IndividualUserForm
                    addNewIndividualUserText={this.addNewUser}
                /> : null } */}
            </div>
        );
    }
}

export default AppZeusActivity;