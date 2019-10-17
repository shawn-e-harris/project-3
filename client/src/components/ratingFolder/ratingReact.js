import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualRatingForm from "../rating"


export default class RatingReact extends Component {

    state = {
        ratings: []
    }

    // GET ALL USERS FROM SERVER
    getRatingsFromServer = (activity_id) => {
        Axios.get(`/api/activities/${activity_id}/users/`) //get prefix
            .then(results => { //create promise
                this.setState({ratings: results.data.allRatings})
                console.log(results.data.allRatings)
                // console.table(results.data.allUsers)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getRatingsFromServer(this.props.match.params.activity_id);
    }

    render() {
        return (
            <div className="App">

                <IndividualRatingForm
                    activityId={this.props.match.params.activity_id}
                    userId={this.props.match.params.user_id}
                    addNewIndividualUserText={this.addNewUser}
                />
                {this.state.ratings.map(rating => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    {rating.rating}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}