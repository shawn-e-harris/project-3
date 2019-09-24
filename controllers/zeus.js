// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const activityApi = require('../models/zeus.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const activityRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL ACTIVITIES
activityRouter.get("/zeus", function (req, res) {
  activityApi.getAllActivities()
    .then((allActivities) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({ allActivities })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW ACTIVITIES
activityRouter.post("/zeus", function (req, res) {
  activityApi.addActivity(req.body)
    .then((activities) => {
      // res.redirect("/zeus")
      res.json(activities)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE ACTIVITIES PATH
activityRouter.get("/zeus/new", function (req, res) {
  activityApi.addActivity(req.params.activitiesId)
    .then((getActivities) => {
      // res.send({getActivities})
      res.json({ getActivities })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
activityRouter.get("/zeus/add", function (req, res) {
  // RENDER NOT CREATED YET
  // res.render("activitiesViewPath", {
  // })
  res.json("ok")
})

// GET ONE ACTIVITY BY activityId
activityRouter.get("/zeus/:activitiesId", function (req, res) {
  activityApi.getOneActivity(req.params.activitiesId)
    .then((activitiesFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {_id: req.params.activitiesId, activitiesFromDb})
      res.json(activitiesFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT ACTIVITY
activityRouter.put("/zeus/:activitiesId", function (req, res) {
  activityApi.updateActivity(req.params.activitiesId, req.body)
    .then((activities) => {
      // res.redirect("/zeus")
      res.json(activities)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// DELETE ACTIVITY
activityRouter.delete("/zeus/:activitiesId", function (req, res) {
  activityApi.deleteActivity(req.params.activitiesId)
    .then((activities) => {
      // res.redirect("/zeus") //redirects to "/", can use any url, etc.
      res.json(activities)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

//  IMPORT ROUTERS
module.exports = {
  activityRouter
}