// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const ratingApi = require('../models/rating.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const ratingRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL RATINGS
ratingRouter.get("/ratings", function (req, res) {
  ratingApi.getAllRatings()
    .then((allRatings) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({ allRatings })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW RATINGS
ratingRouter.post("/ratings", function (req, res) {
  ratingApi.addRating(req.body)
    .then(() => {
      res.redirect("/ratings")
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE RATINGS PATH
ratingRouter.get("/ratings/new", function (req, res) {
  ratingApi.addRating(req.params.ratingsId)
    .then((getRatings) => {
      res.send({ getRatings })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
ratingRouter.get("/ratings/add", function (req, res) {
  // RENDER NOT CREATED YET
  res.render("ratingsViewPath", {
  })
})

// GET ONE RATING BY ratingId
ratingRouter.get("/ratings/:ratingsId", function (req, res) {
  ratingApi.getOneRating(req.params.ratingsId)
    .then((ratingsFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("ratingsViewPath", {_id: req.params.ratingsId, ratingsFromDb})
      res.json(ratingsFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT RATING
ratingRouter.put("/ratings/:ratingsId", function (req, res) {
  ratingApi.updateRating(req.params.ratingsId, req.body)
    .then(() => {
      res.redirect("/ratings")
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// DELETE RATING
ratingRouter.delete("/ratings/:ratingsId", function (req, res) {
  ratingApi.deleteRating(req.params.ratingsId)
    .then(() => {
      res.redirect("/ratings") //redirects to "/", can use any url, etc.
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

//  IMPORT ROUTERS
module.exports = {
  ratingRouter
}