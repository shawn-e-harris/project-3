// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const reviewApi = require('../models/review.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const reviewRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL REVIEWS
reviewRouter.get("/reviews", function (req, res) {
  reviewApi.getAllReviews()
    .then((allReviews) => {
      // RENDER NOT CREATED YET
      res.render("reviewsViewPath", {allReviews})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW REVIEWS
reviewRouter.post("/reviews", function (req, res) {
  reviewApi.addReview(req.body)
  .then(() => {
    res.redirect("/reviews")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// CREATE REVIEWS PATH
reviewRouter.get("/reviews/new", function (req, res) {
  reviewApi.addReview(req.params.reviewsId)
    .then((getReviews) => {
      res.send({getreviews})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
reviewRouter.get("/reviews/add", function (req, res) {
  // RENDER NOT CREATED YET
    res.render("reviewsViewPath", {
    })
})

// GET ONE REVIEW BY reviewId
reviewRouter.get("/reviews/:reviewsId", function (req, res) {
  reviewApi.getOneReview(req.params.reviewsId)
    .then((reviewsFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("reviewsViewPath", {_id: req.params.reviewsId, reviewsFromDb})
      res.json(reviewsFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT REVIEW
reviewRouter.put("/reviews/:reviewsId", function (req, res) {
  reviewApi.updateReview(req.params.reviewsId, req.body)
  .then(() => {
    res.redirect("/reviews")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// DELETE REVIEW
reviewRouter.delete("/reviews/:reviewsId", function (req, res) {
  reviewApi.deleteReview(req.params.reviewsId)
  .then(() => {
    res.redirect("/reviews") //redirects to "/", can use any url, etc.
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

//  IMPORT ROUTERS
module.exports = {
  reviewRouter
}