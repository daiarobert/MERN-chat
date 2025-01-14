import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("connected to mongoDb")
    } catch (error) {
        console.log("Error connection failed", error.message)
    }
}

export default dbConnect