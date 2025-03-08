import mongoose from "mongoose";

const connectDB = async () => {
    //add a event which runs when the mongoDB is connected
    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected')
    })
  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);

};

export default connectDB;