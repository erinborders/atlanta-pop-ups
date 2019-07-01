/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodSchema = new mongoose.Schema({
 restaurant: {
   type: String,
   required: true
 },
 cuisine: {
   type: String,
   required: true
 },
 price: {
   type: String,
   enum: ['$', '$$', '$$$', '$$$$'],
   required: true
 },
 locationId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodCollection = mongoose.model('Food', FoodSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllFood() {
  return FoodCollection.find()
}

function getFoodByLocationId (locationId) {
  return FoodCollection.find({locationId: locationId})
}

function addFood (food) {
  return FoodCollection.create(food)
}

function getOneFood (foodId) {
  return FoodCollection.findById(foodId)
}

function editFood (foodId, newFood) {
  return FoodCollection.findByIdAndUpdate(foodId, newFood)
}

function deleteFood (foodId) {
  return FoodCollection.findByIdAndDelete(foodId)
}

function deleteAllFood () {
  return FoodCollection.deleteMany()
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllFood,
  addFood,
  getOneFood,
  editFood,
  deleteFood,
  deleteAllFood,
  getFoodByLocationId
}
