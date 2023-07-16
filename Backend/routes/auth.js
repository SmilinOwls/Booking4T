const authControllers = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.post("/refresh", authControllers.requestRefreshToken);
router.post("/logout", authMiddleware.verifyToken, authControllers.logOut);
router.post("/forgot-password", authControllers.forgotPassword);
router.post("/verify", authControllers.verifyResetToken);
router.put("/password/reset/", authControllers.resetPassword);

module.exports = router;