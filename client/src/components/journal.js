import React, { Component } from 'react';
import Axios from "axios"

const individualJournal = (newJournalText) => {
    return (
        <p>{newJournalText}</p>
    )
}

const journalList = (showJournal, journalIndex) => {

    return (
        <div>
            {showJournal.individualJournal.map(individualJournal)}
        </div>
    )
}

class IndividualJournalForm extends Component {

    state = {
        newJournalText: ""
    }

    handleInputChange = (event) => {
        this.setState({ newJournalText: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();

        this.props.addNewIndividualJournalText(this.state.newJournalText)
    }

    addJournalToServer = (newJournalText) => {
        console.log({ newJournalText })
        console.log(newJournalText)

        Axios.post(`/api/journals/`, {journal: newJournalText.newJournalText})
            .then(results => {
                this.setState({ newJournalText: results.data.allJournals })
                console.log(newJournalText)

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
                    type="text"
                    placeholder="New Journal"
                    value={this.state.newJournalText}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Add Journal" onClick={() => { this.addJournalToServer(this.state) }}/>
            </form>
        )
    }
}

class AppJournal extends React.Component {

    state = {
        journalList: {
            individualJournal: [""] 
        }
    }

    addNewJournal = (newJournalText) => {
        let journalList = { ...this.state.journalList }
        journalList.individualJournal.push(newJournalText)
        this.setState({ journalList })
    }

    render() {
        return (
            <div>
                <h1>My Journals</h1>
                <IndividualJournalForm
                    addNewIndividualJournalText={this.addNewJournal}
                />
                {journalList(this.state.journalList)}
            </div>
        );
    }
}

export default AppJournal;