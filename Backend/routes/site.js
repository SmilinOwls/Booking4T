const siteControllers = require("../controllers/siteController");
const router = require("express").Router();

// Create Site
router.post("/", siteControllers.createSite);

//Get all sites
router.get("/", siteControllers.getAllSites);

//Get detail site
router.get("/:id", siteControllers.getSiteById);

//Delete site
router.delete("/:id", siteControllers.deleteSite)

module.exports = router;