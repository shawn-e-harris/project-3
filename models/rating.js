// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCHEMEA
const RatingSchema = new mongoose.Schema({
  rating: Number,
  user_id: String
})

// CREATE COLLECTION API
const ratingCollection = mongoose.model('Rating', RatingSchema)

// FUNCTIONS

// GET/ read
const getAllRatings = (user_id) => {
  return ratingCollection.find({_id: user_id});
}

// GET/ read
const getOneRating = (ratingId) => {
  return ratingCollection.findById(ratingId)
}

// CREATE/ post
const addRating = (newRating, usersId) => {
  newRating.usersId = usersId
  return ratingCollection.create(newRating)
}

// UPDATE/ edit
const updateRating = (ratingId, updatedRating) => {
  return ratingCollection.updateOne({_id: ratingId}, updatedRating)
}

// DELETE
const deleteRating = (ratingId) => {
  return ratingCollection.findByIdAndDelete(ratingId)
}

// EXPORT ALL FUNCTIONS
module.exports = {
  addRating,
  deleteRating,
  getAllRatings,
  getOneRating,
  updateRating
}
