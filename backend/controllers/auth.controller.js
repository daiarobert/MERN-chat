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
        fullname: user.fullname,
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
        const {fullname, username, password,confirmPassword} = req.body;

        console.log("Signup Request Body:", req.body);

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username already exists"})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)


        // Generate a random avatar URL
        const avatarBaseURL = "https://api.dicebear.com/6.x/avataaars/svg";
        const randomSeed = Math.random().toString(36).substring(2, 25);
        const randomAvatar = `${avatarBaseURL}?seed=${randomSeed}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            profilePicture: randomAvatar
        })

        if(newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id, 
                fullname: newUser.fullname,
                username: newUser.username, 
                profilePicture: newUser.profilePicture
            })
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

        

    } catch (error) {
        res.status(500).json({error: "internal server error"})
        console.log(error.message)
    }
}