const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getMe,getTeachers} = require("../controllers/userController")
 
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/users", getMe);
router.get("/teachers", getTeachers);



module.exports = router;