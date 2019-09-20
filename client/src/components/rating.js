import React from 'react';

const individualRating = (text) => {
    return (
        <p>{text}</p>
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
        newRatingNumber: 0
    }

    handleInputChange = (evnt) => {
        this.setState({ newRatingNumber: evnt.target.value })
        console.log()
    }

    handleFormSubmission = (evnt) => {
        evnt.preventDefault();

        this.props.addNewIndividualRatingNumber(this.state.newRatingNumber)
    }

    render() {
        console.log("counter after increment: ", this.state.newRatingNumber)
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    type="number"
                    placeholder="Rating"
                    name="New Rating"
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
            individualRating: [Number]
        }
    }

    addNewRating = (newRatingNumber) => {
        
        let ratingList = [...this.state.ratingList]
        console.log(newRatingNumber)
        
        newRatingNumber.individualRating = Number(newRatingNumber.individualRating);
        console.log(newRatingNumber)
        
        ratingList.individualRating.push(newRatingNumber)
        
        this.setState({ ratingList })
      }

  render() {
        return (
            <div>
                <h1>My Rating</h1>
                <IndividualRatingForm
                    addNewindividualRatingNumber={this.addNewRating}
                />
                {ratingList(this.state.ratingList)}
            </div>
        );
    }
}

export default AppRating;