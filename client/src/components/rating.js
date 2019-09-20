import React from 'react';

const individualRating = (number) => {
    return (
        <p>{number}</p>
    )
}

const ratingList = (showRating) => {

    return (
        <div>
            {showRating.individualRating.map(individualRating)}
        </div>
    )
}

class IndividualRatingForm extends React.Component {

    state = {
        newRatingNumber: Number
    }

    handleInputChange = (event) => {
        this.setState({ newRatingNumber: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();

        this.props.addNewIndividualRatingNumber(this.state.newRatingNumber)
    }

    render() {
        // console.log("counter after increment: ", this.state.newRatingNumber)
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="number"
                    placeholder="New Review"
                    value={this.state.newRatingNumber}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Add Review" />
            </form>
        )
    }
}

class AppReview extends React.Component {

    state = {
        ratingList: {
            individualRating: [Number]
        }
    }

    addNewRating = (newRatingNumber) => {

        let ratingList = { ...this.state.ratingList }
        console.log("counter before Number: ",typeof newRatingNumber)
        newRatingNumber = Number(newRatingNumber)
        console.log("counter after Number: ",typeof newRatingNumber)
        ratingList.individualRating.push(newRatingNumber)

        this.setState({ ratingList })

    }

    render() {
        return (
            <div>
                <h1>My Rating</h1>
                <IndividualRatingForm
                    addNewIndividualRatingNumber={this.addNewRating}
                />
                {ratingList(this.state.ratingList)}
            </div>
        );
    }
}



export default AppReview;