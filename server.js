// IMPORT PACKAGES
const express = require('express')
const app = express()

// IMPORT ROUTERS
const { activityRouter } = require('./controllers/activity.js')
const { ratingRouter } = require('./controllers/rating.js')
const { reviewRouter } = require('./controllers/review.js')
const { userRouter } = require('./controllers/user.js')


// PARSE REGISTERED MIDDLEWARE
app.use(express.urlencoded({extended: true}))


// PARSE HTTP REQUEST FROM JSON STRING
app.use(express.json())


// USE `./client/build` DIRECTORY TO HOST STATIC CSS AND IMAGE FILES
app.use(express.static(`${__dirname}/client/build`))


// PREFIX FOR ALL ROUTERS
app.use('/activities/:activitiesId/users/:usersId/ratings/:ratingsId', reviewRouter)
app.use('/activities/:activitiesId/users/:usersId', ratingRouter)
app.use('/activities/:activitiesId', userRouter)
app.use('/', activityRouter)


/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build`)
})


// PORT NUMBER
const PORT = process.env.PORT || 3001

// LOCALHOST: PORT(above)
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
