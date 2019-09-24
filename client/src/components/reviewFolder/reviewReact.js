import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualReviewForm from "../review"

export default class ReviewReact extends Component {

    state = {
        review: []
    }

    // GET ALL ACTIVITIES FROM SERVER
    getReviewsFromServer = () => {
        Axios.get(`/reviews`) //get prefix
            .then(results => { //create promise
                this.setState({ review: results.data.allReviews })
                console.log(results)
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount() {
        this.getReviewsFromServer();
    }

    render() {
        return (
            <div className="App">

                <IndividualReviewForm

                    addNewIndividualReviewText={this.addNewReview}
                />
                {this.state.review.map(review => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    {review.review}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}