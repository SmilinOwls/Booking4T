const bookingController = require("../controllers/bookingController");
const router = require("express").Router();

//Create Booking
router.post("/", bookingController.createOrder);

//Get all orders
router.get("/", bookingController.getAllOrders);
//Get detail order
router.get("/:id", bookingController.getOrderById);

//Get my orders
router.get("/me", bookingController.getMyOrders);

//Update order
router.put("/admin/:id", bookingController.updateOrder);
router.put("/status/:id", bookingController.updateOrderByStatus);

//Delete order


module.exports = router;