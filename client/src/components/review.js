import React from 'react';

const review = (text) => {
  return (
    <li>{text}</li>
  )
}

const reviewListHeader = (headerText) => {
  return (
    <h3>{headerText}</h3>
  )
}

const reviewList = (alist) => {

  return (
    <div>
      {reviewListHeader(alist.listName)}
      <ul>
        {alist.listReviews.map(review)}
      </ul>
    </div>
  )
}

const reviewListContainer = (lists, addNewReviewAtIndex) => {
  return (
    <div>
      {lists.map(reviewList)}
    </div>
  )
}

class ReviewForm extends React.Component {

  state = {
    newReviewText: ""
  }

  handleInputChange = (evnt) => {
    this.setState({ newReviewText: evnt.target.value })
  }

  handleFormSubmission = (evnt) => {
    evnt.preventDefault();

    this.props.addNewReviewText(this.state.newReviewText)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input 
          type="text" 
          placeholder="new review" 
          value={this.state.newReviewText}  
          onChange={this.handleInputChange}
        />
        <input type="submit" value="add review" />
      </form>
    )
  }
}

class App extends React.Component {

  state = {
    reviewList:
      { listName : "Chores"
      , listReviews: ["breathe", "eat lunch", "bob"]
      }
  }

  addNewReview = (newReviewText) => {

    let reviewList = {...this.state.reviewList}

    reviewList.listReviews.push(newReviewText)

    this.setState({ reviewList })
    
  }

  render() {
    return (
      <div>
        <h1>My Review Lists</h1>
        <ReviewForm 
          addNewReviewText={this.sendNewReviewToServer}
        />
        {reviewList( this.state.reviewList )}
      </div>
    );
  }
}

export default App;