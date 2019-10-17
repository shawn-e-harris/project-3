import React, { Component } from 'react';
// import IndividualReviewForm from "./review";
import Axios from "axios";

const individualRating = (number) => {
    return (
        <div>
            <p>{number}</p>
        </div>
    )
}

const ratingList = (showRating, ratingIndex) => {

    return (
        <div>
            {showRating.individualRating.map(individualRating)}
        </div>
    )
}

class IndividualRatingForm extends Component {

    state = {
        rating: Number,
    }

    handleInputChange = (event) => {
        this.setState({ rating: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.props.addNewIndividualRatingNumber(this.state.rating)
    }

    addRatingToServer = (rating) => {
        console.log(this.props.activityId)
        // console.log(this.props.userId)
        console.log(rating)


        Axios.post(`/api/activities/${this.props.activityId}/users`, rating)
            .then(res => {
                // this.state({activity_id})
                // this.state({user})
                this.setState({ rating: res.data })
                console.log(rating)
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
                    type="number"
                    placeholder="New Rating"
                    value={this.state.rating}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Add Rating" onClick={() => { this.addRatingToServer(this.state) }}/>
            </form>
        )
    }
}

class AppRating extends React.Component {

    state = {
        ratingList: {
            individualRating: [Number],
            // hasEnteredRatingNumber: false,
        }
    }

    addNewRating = (rating) => {

        let ratingList = { ...this.state.ratingList }
        console.log("counter before Number: ", typeof rating)
        rating = Number(rating)
        console.log("counter after Number: ", typeof rating)
        ratingList.individualRating.push(rating)
        // this.setState({ individualRating: individualRating })
        // this.setState({ hasEnteredRatingNumber: true })
        this.setState({ ratingList })

    }

    render() {
        return (
            <div>
                {/* <h1>My Rating</h1> */}
                <IndividualRatingForm
                activityId={this.props.activityId}
                userId={this.props.userId}
                    addNewIndividualRatingNumber={this.addNewRating}
                />
                {/* {ratingList(this.state.ratingList)}
                {this.state.hasEnteredRatingNumber ? <IndividualReviewForm
                    addNewIndividualReviewText={this.addNewReview}
                /> : null} */}
            </div>
        );
    }
}



export default AppRating;