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
const foodApi = require('../models/foodPopUp.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const foodRouter = express.Router({ mergeParams: true })

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

 //USE IN THE LOCATION CONTROLLER
// foodRouter.get('/', (req, res) => {
//   foodApi.getAllFood() 
//     .then((foodPopUps) => {
//       res.send(foodPopUps)
//     })
// })

foodRouter.get('/', (req, res) => {
  req.body.locationId = req.params.locationId
  foodApi.getFoodByLocationId(req.params.locationId)
    .then((locationFoodPopUps) => {
      res.send(locationFoodPopUps)
    })
})

foodRouter.post('/', (req, res) => {
  req.body.locationId = req.params.locationId
  foodApi.addFood(req.body)
    .then(() => {
      res.send('food pop up created')
    })
})

foodRouter.get('/:foodId', (req, res) => {
  foodApi.getOneFood(req.params.foodId)
    .then((foodPopUp) => {
      res.send(foodPopUp)
    })
})

foodRouter.put('/:foodId', (req, res) => {
  foodApi.editFood(req.params.foodId, req.body)
    .then(() => {
      res.send('food pop up edited')
    })
})

foodRouter.delete('/:foodId', (req, res) => {
  foodApi.deleteFood(req.params.foodId)
    .then(() => {
      res.send('food pop up deleted')
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  foodRouter
}
