import React, { Component } from 'react';
import Axios from "axios"

const individualHadesActivity = (text) => {
    return (
        <p>{text}</p>
    )
}

const hadesEnergyLevel = (text) => {
    return (
        <p>{text}</p>
    )
}

const activityList = (showActivity, activityIndex) => {

    return (
        <div>
            {showActivity.individualHadesActivity.map(individualHadesActivity)}
            {showActivity.hadesEnergyLevel.map(hadesEnergyLevel)}
        </div>
    )
}

class IndividualHadesActivityForm extends Component {

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
        this.props.addNewIndividualHadesActivityText(this.state.activityName)
        this.props.addNewIndividualHadesEnergyLevel(this.state.activityLevel)
    }

    addActivityToServer = (activity) => {
        console.log({ activity })
        console.log(activity)

        Axios.post("/api/hades", activity)
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
                    name="hadesEnergyLevel"
                    value="Low"
                    checked={this.state.activityLevel === "Low"}
                    onChange={this.handleRadioChange}
                />

                <label>Low</label>
                <input
                    type="radio"
                    name="hadesEnergyLevel"
                    value="Medium"
                    checked={this.state.activityLevel === "Medium"}
                    onChange={this.handleRadioChange}
                />
                <label>Medium</label>
                <input
                    type="radio"
                    name="hadesEnergyLevel"
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

class AppHadesActivity extends React.Component {

    state = {
        activityList: {
            individualHadesActivity: [""],
            hadesEnergyLevel: [""],
            // hasEnteredActivityText: false
        }
    }

    addNewActivity = (activityName) => {

        let activityList = { ...this.state.activityList }

        activityList.individualHadesActivity.push(activityName)
        // this.setState({individualHadesActivity: individualHadesActivity})
        // this.setState({hasEnteredActivityText: true})
        this.setState({ activityList })

    }

    addActivityLevel = (activityLevel) => {

        let activityList = { ...this.state.activityList }

        activityList.hadesEnergyLevel.push(activityLevel)
        // this.setState({individualHadesActivity: individualHadesActivity})
        // this.setState({hasEnteredActivityText: true})
        this.setState({ activityList })

    }

    render() {
        return (
            <div>
                <h1>Hades Activity</h1>
                <IndividualHadesActivityForm
                    addNewIndividualHadesActivityText={this.addNewActivity}
                    addNewIndividualHadesEnergyLevel={this.addActivityLevel}

                />
                {activityList(this.state.activityList)}
                {/* {this.state.hasEnteredActivityText ? <IndividualUserForm
                    addNewIndividualUserText={this.addNewUser}
                /> : null } */}
            </div>
        );
    }
}

export default AppHadesActivity;