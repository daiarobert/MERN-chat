import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/JWTToken.js"

export const login = async (req, res) => {
   try {
    const  {username, password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect) {
        return res.status(400).json({error: "Invalid credentials"})
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePicture: user.profilePicture,
    })


    
   } catch (error) {
    console.log(error)
   }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", " ", { maxAge:0 });
        res.status(200).json({message: "Logged out succcessfully"})

    } catch (err){
        console.log("Error", err.message);
        res.status(500).json({err: "error loging out"})

    }

}

export const signup = async (req, res) => {
    try {
        const {fullName, username, password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username already exists"})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)


        const maleProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? maleProfilepic : femaleProfilepic
        })

        if(newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id, 
                fullName: newUser.fullName,
                username: newUser.username, 
                profilePicture: newUser.profilePicture
            })
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

        

    } catch (error) {
        res.status(500).json({error: "internal server error"})
    }
}