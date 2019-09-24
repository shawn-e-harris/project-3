// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCHEMEA
const ReviewSchema = new mongoose.Schema({
  review: String,
})

// CREATE COLLECTION API
const reviewCollection = mongoose.model('Review', ReviewSchema)

// FUNCTIONS

// GET/ read
const getAllReviews = () => {
  return reviewCollection.find();
}

// GET/ read
const getOneReview = (reviewId) => {
  return reviewCollection.findById(reviewId)
}

// CREATE/ post
const addReview = (newReview) => {
  return reviewCollection.create(newReview)
}

// UPDATE/ edit
const updateReview = (reviewId, updatedReview) => {
  return reviewCollection.updateOne({_id: reviewId}, updatedReview)
}

// DELETE
const deleteReview = (reviewId) => {
  return reviewCollection.findByIdAndDelete(reviewId)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addReview,
  deleteReview,
  getAllReviews,
  getOneReview,
  updateReview
}
