const blogController = require("../controllers/blogController");
const router = require("express").Router();


//Create blog
router.post("/admin", blogController.createBlog);

//Get all blogs
router.get("/", blogController.getAllBlogs);

//Get detail blog
router.get("/:id", blogController.getBlogById);

//Update blog
router.put("/admin/:id", blogController.updateBlog);

//Delete blog
router.delete("/admin/:id", blogController.deleteBlog);


module.exports = router