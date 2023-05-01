const placeControllers = require("../controllers/placeController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

// Create Place
router.post("/admin", placeControllers.createPlace);

// Get Place
router.get("/", placeControllers.getAllPlaces);
router.get("/:id", placeControllers.getPlaceById);

router.get("/site/:id", placeControllers.getPlaceBySite);

// Update Place
router.put("/admin/:id", placeControllers.updatePlace);

// Delete Place
router.delete("/admin/:id",  placeControllers.deletePlace);

//Create place reviews
router.post("/:id/review", placeControllers.createPlaceReview);

// Get place review
router.get("/user/reviews", placeControllers.getPlaceReview);

// Delete place review
router.delete("/user/review", placeControllers.deleteReview);

//Search place
router.get("/name/search", placeControllers.searchPlaceByName);



module.exports = router;


