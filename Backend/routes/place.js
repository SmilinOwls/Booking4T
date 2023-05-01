const placeControllers = require("../controllers/placeController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

// Create Place
router.post("/admin", authMiddleware.authorizeRole, placeControllers.createPlace);

// Get Place
router.get("/", placeControllers.getAllPlaces);
router.get("/:id", placeControllers.getPlaceById);

router.get("/site/:id", placeControllers.getPlaceBySite);

// Update Place
router.put("/admin/:id", authMiddleware.authorizeRole, placeControllers.updatePlace);

// Delete Place
router.delete("/admin/:id", authMiddleware.authorizeRole,  placeControllers.deletePlace);

//Create place reviews
router.post("/:id/review", authMiddleware.verifyToken, placeControllers.createPlaceReview);

// Get place review
router.get("/user/reviews", authMiddleware.verifyToken, placeControllers.getPlaceReview);

// Delete place review
router.delete("/user/review", authMiddleware.verifyToken, placeControllers.deleteReview);

//Search place
router.get("/name/search", placeControllers.searchPlaceByName);



module.exports = router;


