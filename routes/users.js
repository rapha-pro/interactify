const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);

// MAIN

/**
 *        Function: updateUser
 *         Purpose: update a user Info
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function updateUser(req, res) {
    if(req.body.userId !== req.params.id || req.body.isAdmin) {
        console.log("updateUser(403): User not found");
        res.status(403).json("User not found").end();
        return;
    }
        
    // if user tries to update his password
    if(req.body.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);

        } catch (err) {
            console.log("updateUser(500): error saving user password:", err.msg);
            res.status(500).json(err.msg).end();
        }
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json("Account has been updated successfully").end();
    } catch (err) {
        console.log("updateUser(403): Could not find user", err.msg);
        res.status(500).json(err.msg).end();
    }
}




/**
 *        Function: deleteUser
 *         Purpose: delete a user
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function deleteUser(req, res) {
    if(req.body.userId !== req.params.id || req.body.isAdmin) {
        console.log("deleteUser(403): User not found");
        res.status(403).json("User not found").end();
        return;
    }

    try {
        const user = await User.deleteOne({"_id": req.params.id});
        res.status(200).json("Account has been deleted successfully").end();
    } catch (err) {
        console.log("deleteUser(403): Could not find user", err.msg);
        res.status(500).json(err.msg).end();
    }
}



/**
 *        Function: getUser
 *         Purpose: get a user
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id);

        // do not wish to see passwords, updatedAt infos, in the json returned
        const {password, updatedAt, createdAt, ...other} = user._doc;
        res.status(200).json(other).end();
    } catch (err) {
        console.log("getUser(500): Could not find user", err.msg);
        res.status(500).json(err.msg).end();
    }
}





/**
 *        Function: followUser
 *         Purpose: follow a user
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function followUser(req, res) {
    if(req.body.userId === req.params.id) { 
        console.log("followUser(403): Can not follow yourself");
        res.status(403).json("You can not follow yourself!").end();
        return;
    }

    try {
        const user = await User.findById(req.params.id);
        const currrentUser = await User.findById(req.body.userId);

        if(user.followers.includes(req.body.userId)) {
            res.status(409).json("already follow").end();
            return;
        }

        await user.updateOne({ $push: { followers: req.body.userId }});
        await currrentUser.updateOne({ $push: { followings: req.params.id }});

        res.status(200).json("you now follow this user").end();
    } catch (err) {
        console.log("followUser(500): Could not find user", err.msg);
        res.status(500).json(err.msg).end();
    }


}




/**
 *        Function: unfollowUser
 *         Purpose: unfollow a user
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function unfollowUser(req, res) {
    if(req.body.userId === req.params.id) {
        console.log("followUser(403): Can not follow yourself");
        res.status(403).json("You can not follow or unfollow yourself!").end();
        return;
    }

    try {
        const user = await User.findById(req.params.id);
        const currrentUser = await User.findById(req.body.userId);

        if(!user.followers.includes(req.body.userId)) {
            res.status(409).json("you do not follow this user").end();
            return;
        }

        await user.updateOne({ $pull: { followers: req.body.userId }});
        await currrentUser.updateOne({ $pull: { followings: req.params.id }});

        res.status(200).json("you now unfollow this user").end();
    } catch (err) {
        console.log("followUser(500): Could not find user", err.msg);
        res.status(500).json(err.msg).end();
    }


}




module.exports = router;