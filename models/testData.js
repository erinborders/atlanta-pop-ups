const locationApi = require('./location.js')
const foodApi = require('./foodPopUp.js')
const shopApi = require('./shopPopUp.js')

//locations
const buckhead = {
    neighborhood: "Buckhead"
}

const midtown = {
    neighborhood: "Midtown"
}

const downtown = {
    neighborhood: "Downtown"
}

//food pop ups
const anotherBrokenEgg = {
    restaurant: "Another Broken Egg",
    cuisine: "Breakfast",
    price: "$$",
    address: "2355 Peachtree Road \n Atlanta, GA 30305",
    time: "7/3/19",
}

const papisCubanGrill = {
    restaurant: "Papi's Cuban Grill",
    cuisine: "Caribbean",
    price: "$",
    address: "216 Ponce De Leon Ave \n Atlanta, GA 30308",
    time: "7/2/19"
}

const foodShoppe = {
    restaurant: "The Food Shoppe",
    cuisine: "Creole",
    price: "$",
    address: "123 Luckie St \n Atlanta, GA 30303",
    time: "7/1/19"
}

locationApi.deleteAllLocations()
    .then(() => foodApi.deleteAllFood())
    .then(() => shopApi.deleteAllShops())
    .then(() => locationApi.addLocation(buckhead))
    .then((buckhead) => {
        anotherBrokenEgg.locationId = buckhead._id
        foodApi.addFood(anotherBrokenEgg)
    })
    .then(() => locationApi.addLocation(midtown))
    .then((midtown) => {
        papisCubanGrill.locationId = midtown._id
        foodApi.addFood(papisCubanGrill)
    })
    .then(() => locationApi.addLocation(downtown))
    .then((downtown) => {
        foodShoppe.locationId = downtown._id
        foodApi.addFood(foodShoppe)
    })
    .then(() => {
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })