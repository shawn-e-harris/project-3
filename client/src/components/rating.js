import React, { Component } from 'react';
import IndividualReviewForm from "./review";

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
        newRatingNumber: Number,
    }

    handleInputChange = (event) => {
        this.setState({ newRatingNumber: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();

        this.props.addNewIndividualRatingNumber(this.state.newRatingNumber)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="number"
                    placeholder="New Rating"
                    value={this.state.newRatingNumber}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Add Rating" />
            </form>
        )
    }
}

class AppRating extends React.Component {

    state = {
        ratingList: {
            individualRating: [Number],
            hasEnteredRatingNumber: false,
        }
    }

    addNewRating = (newRatingNumber) => {

        let ratingList = { ...this.state.ratingList }
        console.log("counter before Number: ", typeof newRatingNumber)
        newRatingNumber = Number(newRatingNumber)
        console.log("counter after Number: ", typeof newRatingNumber)
        ratingList.individualRating.push(newRatingNumber)
        this.setState({individualRating: individualRating})
        this.setState({hasEnteredRatingNumber: true})
        this.setState({ ratingList })

    }

    render() {
        return (
            <div>
                {/* <h1>My Rating</h1> */}
                <IndividualRatingForm
                    addNewIndividualRatingNumber={this.addNewRating}
                />
                {ratingList(this.state.ratingList)}
                {this.state.hasEnteredRatingNumber ? <IndividualReviewForm
                    addNewIndividualReviewText={this.addNewReview}
                /> : null }  
            </div>
        );
    }
}



export default AppRating;