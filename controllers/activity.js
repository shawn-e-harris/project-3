// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const activityApi = require('../models/activity.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const activityRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL ACTIVITIES
activityRouter.get("/activities", function (req, res) {
  activityApi.getAllActivities()
    .then((allActivities) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({allActivities})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
  console.log("banana")
})

// CREATE NEW ACTIVITIES
activityRouter.post("/activities", function (req, res) {
  activityApi.addActivity(req.body)
  .then(() => {
    // res.redirect("/activities")
    res.json("ok")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// CREATE ACTIVITIES PATH
activityRouter.get("/activities/new", function (req, res) {
  activityApi.addActivity(req.params.activitiesId)
    .then((getActivities) => {
      // res.send({getActivities})
      res.json({getActivities})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
activityRouter.get("/activities/add", function (req, res) {
  // RENDER NOT CREATED YET
    res.render("activitiesViewPath", {
    })
})

// GET ONE ACTIVITY BY activityId
activityRouter.get("/activities/:activitiesId", function (req, res) {
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
activityRouter.put("/activities/:activitiesId", function (req, res) {
  activityApi.updateActivity(req.params.activitiesId, req.body)
  .then(() => {
    res.redirect("/activities")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// DELETE ACTIVITY
activityRouter.delete("/activities/:activitiesId", function (req, res) {
  activityApi.deleteActivity(req.params.activitiesId)
  .then(() => {
    res.redirect("/activities") //redirects to "/", can use any url, etc.
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

//  IMPORT ROUTERS
module.exports = {
  activityRouter
}