const bookingController = require("../controllers/bookingController");
const router = require("express").Router();

//Create Booking
router.post("/", bookingController.createOrder);

module.exports = router;