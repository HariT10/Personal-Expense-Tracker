const express = require("express");

const {

    registerUser,
    loginUser,
    getUserProfile


} = require("../controllers/authController.js");
const { get } = require("mongoose");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getUser", getUserProfile);

module.exports = router;