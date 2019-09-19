import React from 'react';

const rating = (ratingNum) => (<b>{ratingNum}</b>)

const ratingButton = (buttonText, mathOperation) => 
(<button onClick={mathOperation}>{buttonText}</button>)

class App extends React.Component {
  
  state = {
    rating: 0
  }

  increment = () => {

    console.log("rating before increment: ", this.state.rating)
    let rating = this.state.rating + 1

    if (rating >= 6) {
        return rating = 5
    }
    this.setState({rating}) 
  }

  decrement = () => {
    console.log("rating before decrement: ", this.state.rating)
    let rating = this.state.rating - 1 

    if (rating <= 0) {
        return rating = 1
    }
    this.setState({rating})
  }

  render() { 
    console.log("rating after increment: ", this.state.rating)
    return (
      <div>
        {ratingButton("+", this.increment)}
        {rating(this.state.rating)}
        {ratingButton("-", this.decrement)}
      </div>
    )
  }
}

export default App;
