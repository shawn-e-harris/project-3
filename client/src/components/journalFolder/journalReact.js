import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualJournalForm from "../journal"

export default class JournalReact extends Component {

    state = {
        journals: []
    }

    // GET ALL JOURNALS FROM SERVER
    getJournalsFromServer = () => {
        Axios.get(`/api/journals/`) //get prefix
            .then(results => { //create promise
                this.setState({ journals: results.data.allJournals })
                console.log(results)
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount() {
        this.getJournalsFromServer();
    }

    render() {
        return (
            <div className="App">

                <IndividualJournalForm

                    addNewIndividualJournalText={this.addNewJournal}
                />
                {this.state.journals.map(journal => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    {journal.journal}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}