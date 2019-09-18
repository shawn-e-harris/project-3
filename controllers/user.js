// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
const userApi = require('../models/user.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
const userRouter = express.Router()

// REQ HANDLERS ****************

// GET ALL USERS
userRouter.get("/users", function (req, res) {
  userApi.getAllUsers()
    .then((allUsers) => {
      // RENDER NOT CREATED YET
      // res.render("activitiesViewPath", {allActivities})
      res.json({ allUsers })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE NEW USERS
userRouter.post("/users", function (req, res) {
  userApi.addUser(req.body)
    .then(() => {
      // res.redirect("/users")
      res.json("ok")
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// CREATE USERS PATH
userRouter.get("/users/new", function (req, res) {
  userApi.addUser(req.params.usersId)
    .then((getUsers) => {
      res.send({ getusers })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// RENDER CREATEFORM
userRouter.get("/users/add", function (req, res) {
  // RENDER NOT CREATED YET
  res.render("usersViewPath", {
  })
})

// GET ONE USER BY userId
userRouter.get("/users/:usersId", function (req, res) {
  userApi.getOneUser(req.params.usersId)
    .then((usersFromDb) => {
      // RENDER NOT CREATED YET
      // res.render("usersViewPath", {_id: req.params.usersId, usersFromDb})
      res.json(usersFromDb)
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// EDIT USER
userRouter.put("/users/:usersId", function (req, res) {
  userApi.updateUser(req.params.usersId, req.body)
    .then(() => {
      res.redirect("/users")
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// DELETE USER
userRouter.delete("/users/:usersId", function (req, res) {
  userApi.deleteUser(req.params.usersId)
    .then(() => {
      res.redirect("/users") //redirects to "/", can use any url, etc.
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

//  IMPORT ROUTERS
module.exports = {
  userRouter
}