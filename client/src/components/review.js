import React from 'react';

const individualReview = (text) => {
    return (
        <p>{text}</p>
    )
}

const reviewList = (showReview) => {

    return (
        <div>
            {showReview.individualReview.map(individualReview)}
        </div>
    )
}

class IndividualReviewForm extends React.Component {

    state = {
        newReviewText: ""
    }

    handleInputChange = (evnt) => {
        this.setState({ newReviewText: evnt.target.value })
    }

    handleFormSubmission = (evnt) => {
        evnt.preventDefault();

        this.props.addNewIndividualReviewText(this.state.newReviewText)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <textarea
                    rows="4" 
                    cols="50"
                    type="text"
                    placeholder="New Review"
                    value={this.state.newReviewText}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="add item" />
            </form>
        )
    }
}

class App extends React.Component {

    state = {
        reviewList:
            { individualReview: [""] }
    }

    addNewItem = (newReviewText) => {

        let reviewList = { ...this.state.reviewList }

        reviewList.individualReview.push(newReviewText)

        this.setState({ reviewList })

    }

    render() {
        return (
            <div>
                {/* <h1>My Todo Lists</h1> */}
                <IndividualReviewForm
                    addNewIndividualReviewText={this.addNewItem}
                />
                {reviewList(this.state.reviewList)}
            </div>
        );
    }
}

export default App;