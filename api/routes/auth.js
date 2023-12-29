const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", signup);
router.post("/login", login);



// MAIN

/**
 *        Function: signup
 *         Purpose: register user account
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function signup(req, res) {
    try {
        // generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // new user account
        const newUser = await new User(req.body);
        const user =  await newUser.save();
        res.status(200).json(user).end();
    } catch (err) {
        console.log("signup(500): error saving user:", err.msg);
        res.status(500).json(err.msg).end();
    }
}




/**
 *        Function: login
 *         Purpose: log in a user to their account
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function login(req, res) {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(404).json("Invalid credentials!").end();
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(404).json("Invalid credentials!").end();

        res.status(200).json(user).end();
    } catch (err) {
        console.log("login(400): User not found:", err.msg);
        res.status(404).json(err.msg).end();
    }
}




module.exports = router;