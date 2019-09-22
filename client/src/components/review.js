// import React, { Component } from 'react';

// const individualReview = (text) => {
//     return (
//         <p>{text}</p>
//     )
// }

// const reviewList = (showReview, reviewIndex) => {

//     return (
//         <div>
//             {showReview.individualReview.map(individualReview)}
//         </div>
//     )
// }

// class IndividualReviewForm extends Component {

//     state = {
//         newReviewText: ""
//     }

//     handleInputChange = (event) => {
//         this.setState({ newReviewText: event.target.value })
//     }

//     handleFormSubmission = (event) => {
//         event.preventDefault();

//         this.props.addNewIndividualReviewText(this.state.newReviewText)
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleFormSubmission}>
//                 <textarea
//                     rows="4" 
//                     cols="50"
//                     type="text"
//                     placeholder="New Review"
//                     value={this.state.newReviewText}
//                     onChange={this.handleInputChange}
//                 />
//                 <input type="submit" value="Add Review" />
//             </form>
//         )
//     }
// }

// class AppReview extends React.Component {

//     state = {
//         reviewList: {
//             individualReview: [""] 
//         }
//     }

//     addNewReview = (newReviewText) => {

//         let reviewList = { ...this.state.reviewList }

//         reviewList.individualReview.push(newReviewText)

//         this.setState({ reviewList })

//     }

//     render() {
//         return (
//             <div>
//                 {/* <h1>My Review</h1> */}
//                 <IndividualReviewForm
//                     addNewIndividualReviewText={this.addNewReview}
//                 />
//                 {reviewList(this.state.reviewList)}
//             </div>
//         );
//     }
// }

// export default AppReview;