// IMPORT MONGOOSE
const mongoose = require('./connection.js')


// CREATE SCHEMEA
const RatingSchema = new mongoose.Schema({
  rating: Number,
  userId: mongoose.Types.ObjectId
})

// CREATE COLLECTION API
const ratingCollection = mongoose.model('Rating', RatingSchema)

// FUNCTIONS

// GET/ read
const getAllRatings = () => {
  return ratingCollection.find();
}

// GET/ read
const getOneRating = (ratingId) => {
  return ratingCollection.findById(ratingId)
}

// CREATE/ post
const addRating = (newRating, usersId) => {
  return ratingCollection.create(newRating.usersId)
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
