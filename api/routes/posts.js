const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.post("/", createPost);

router.route("/:id")
.get(getPost)
.put(updatePost)
.delete(deletePost);

router.put("/:id/like", likePost);
router.get("/timeline/all", getTimelinePost); 



// MAIN

/**
 *        Function: createPost
 *         Purpose: create a post
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function createPost(req, res) {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost).end();
        return;
    } catch (err) {
        console.log("createPost(500): Could not save Post", err.msg);
        res.status(500).json(err.msg).end();
        return;
    }
}





/**
 *        Function: getPost
 *         Purpose: get a post
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post).end();
        return;
    }  catch(err) {
        console.log("getPost(500): retrieve Unsuccessful", err.msg);
        res.status(500).json(err.msg).end();
        return;
    }
}




/**
 *        Function: getTimelinePost
 *         Purpose: get the timeline posts of a user
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function getTimelinePost(req, res) {
    try {
        const currrentUser = await User.findById(req.body.userId);
        let userPosts = await Post.find({ userId: currrentUser._id });
        let friendPosts = await Promise.all(
            currrentUser.followings.map((friendId) => Post.find({ userId: friendId }))
        );

        res.status(200).json(userPosts.concat(...friendPosts)).end();
        return;
    }  catch(err) {
        console.log("getTimelinePost(500): retrieve Unsuccessful", err.msg);
        res.status(500).json(err.msg).end();
        return;
    }
}





/**
 *        Function: updatePost
 *         Purpose: update a post
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function updatePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.userId.equals(req.body.userId)) {
            res.status(403).json("You cannot update this post").end();
            return;
        }
        await post.updateOne({ $set: req.body });

        res.status(200).json("Post updated successfully!").end();
        return;
    }  catch(err) {
        console.log("updatePost(500): post not updated", err.msg);
        res.status(500).json(err.msg).end();
        return;
    }
}




/**
 *        Function: deletePost
 *         Purpose: delete a post
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function deletePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.userId.equals(req.body.userId)) {
            res.status(403).json("You cannot delete this post").end();
            return;
        }
        await post.deleteOne();

        res.status(200).json("Post deleted successfully!").end();
        return;
    }  catch(err) {
        console.log("deletePost(500): delete Unsuccessful", err.msg);
        res.status(500).json(err.msg).end();
        return;
    }
}




/**
 *        Function: likePost
 *         Purpose: like a post
 * @param {*} req : request  object
 * @param {*} res : response object
 */
async function likePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);

        if(post.likes.includes(req.body.userId)) {
            res.status(200).json("You liked this post already").end();
            return;
        }

        await post.updateOne({ $addToSet: { likes: req.body.userId } });

        res.status(200).json("Post liked!").end();
        return;
    }  catch(err) {
        console.log("likePost(500): like Unsuccessful", err.msg);
        res.status(500).json(err.msg).end();
        return;
    }
}




module.exports = router;