import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        // get all users id from db but not the one thats equal to loggedInUserID and dont retrieve the password
        const allUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")

        res.status(200).json(allUsers)

    } catch (err) {
        console.log("internal error in -> user.controller : ", err.message);
        res.status(500).json("Internal server error")
    }
}