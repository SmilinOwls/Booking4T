const blogController = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();


//Create blog
router.post("/admin", authMiddleware.authorizeRole, blogController.createBlog);

//Get all blogs
router.get("/", blogController.getAllBlogs);

//Get detail blog
router.get("/:id", blogController.getBlogById);

//Update blog
router.put("/admin/:id", authMiddleware.authorizeRole, blogController.updateBlog);

//Delete blog
router.delete("/admin/:id", authMiddleware.authorizeRole, blogController.deleteBlog);


module.exports = router