const siteControllers = require("../controllers/siteController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

// Create Site
router.post("/", authMiddleware.authorizeRole, siteControllers.createSite);

//Get all sites
router.get("/", siteControllers.getAllSites);

//Get detail site
router.get("/:id", siteControllers.getSiteById);

//Delete site
router.delete("/:id", authMiddleware.authorizeRole, siteControllers.deleteSite)

module.exports = router;