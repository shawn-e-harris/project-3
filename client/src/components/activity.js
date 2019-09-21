import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import IndividualUserForm from "./user"

const individualActivity = (text) => {
    return (
        <p>{text}</p>
    )
}

// const styling = {
//     button: {backgroundColor: "red"},
// }

const activityList = (showActivity, activityIndex) => {

    return (
        <div>
            {showActivity.individualActivity.map(individualActivity)}
        </div>
    )
}

class IndividualActivityForm extends Component {

    state = {
        newActivityText: ""
    }

    handleInputChange = (event) => {
        this.setState({ newActivityText: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();

        this.props.addNewIndividualActivityText(this.state.newActivityText)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="text"
                    placeholder="New Activity"
                    value={this.state.newActivityText}
                    onChange={this.handleInputChange}
                />
                
                <input type="submit" value="Add Activity" />
                {/* <Button className={styling.button}/> */}
            </form>
        )
    }
}

class AppActivity extends React.Component {

    state = {
        activityList: {
            individualActivity: [""],
            energyLevel: [""],
            hasEnteredActivityText: false
        }
    }

    addNewActivity = (newActivityText) => {

        let activityList = { ...this.state.activityList }

        activityList.individualActivity.push(newActivityText)
        this.setState({individualActivity: individualActivity})
        this.setState({hasEnteredActivityText: true})
        this.setState({ activityList })

    }

    render() {
        return (
            <div>
                <h1>Activity</h1>
                <IndividualActivityForm
                    addNewIndividualActivityText={this.addNewActivity}
                />
                {activityList(this.state.activityList)}
                {this.state.hasEnteredActivityText ? <IndividualUserForm
                    addNewIndividualUserText={this.addNewUser}
                /> : null }
            </div>
        );
    }
}

export default AppActivity;