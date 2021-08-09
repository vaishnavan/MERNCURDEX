const UserPost = require("../model/userPost.model");


const createUserPost = async (req, res) => {
    try {
        const {username} = req.body;

        const userData = new UserPost({
            username
        })
        await userData.save();
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(404).json(error);
    }
}

const getUserPost = async (req, res) => {
    try {
       const myUserData = await UserPost.find();
       res.status(200).json(myUserData);

    } catch (error) {
        return res.status(404).json(error);
    }
}

module.exports = {
    createUserPost,
    getUserPost
}   