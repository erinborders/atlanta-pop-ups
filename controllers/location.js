/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const locationApi = require('../models/location.js')
const shopApi = require('../models/shopPopUp.js')
const foodApi = require('../models/foodPopUp.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const locationRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
locationRouter.get('/', (req, res) => {
  let getAllLocations = locationApi.getAllLocations()
  let getAllShops = shopApi.getAllShops()
  let getAllFood = foodApi.getAllFood()
  return Promise.all([getAllLocations, getAllShops, getAllFood])
    .then(([locations, shops, food]) => {
        res.render('locations/locations', {locations, shops, food})
    })
})

locationRouter.post('/', (req, res) => {
    locationApi.addLocation(req.body)
        .then(() => {
            // res.send('new location created')
            res.redirect('/locations')
        })
})

locationRouter.get('/food', (req, res) => {
    let getAllLocations = locationApi.getAllLocations()
    let getAllFood = foodApi.getAllFood()
    return Promise.all([getAllLocations, getAllFood])
        .then(([locations, food]) => {
            res.render('locations/foodOnly', {locations, food})
        })
})

locationRouter.get('/shops', (req, res) => {
    let getAllLocations = locationApi.getAllLocations()
    let getAllShops = shopApi.getAllShops()
    return Promise.all([getAllLocations, getAllShops])
        .then(([locations, shops]) => {
            res.render('locations/shopsOnly', {locations, shops})
        })
})

locationRouter.get('/new', (req, res) => {
    res.render('locations/createLocationForm')
})

locationRouter.get('/:locationId', (req, res) => {
    req.body.locationId = req.params.locationId
    let getLocation = locationApi.getLocation(req.params.locationId)
    let getFood = foodApi.getFoodByLocationId(req.params.locationId)
    let getShops = shopApi.getShopsByLocationId(req.params.locationId)
    return Promise.all([getLocation, getFood, getShops])
        .then(([location, food, shops]) => {
            res.render('locations/singleLocation', {location, food, shops})
        })
})

locationRouter.delete('/:locationId', (req, res) => {
    locationApi.deleteLocation(req.params.locationId)
        .then(() => {
            // res.send('location deleted')
            res.redirect('/locations')
        })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  locationRouter
}
