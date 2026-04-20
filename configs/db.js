import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('database connected successfully'))
        await mongoose.connect(`${process.env.MONGO_URI}/greencart`)
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDb;