//This file is used to connect Node.js backend to MongoDB using Mongoose

//First import mongoose
const mongoose = require('mongoose');

const connectDB = async () => {

    //try and catch block
    try{

        //the database connection part
        await mongoose.connect(process.env.MONGO_URI, {});

        console.log('MongoDB connected successfully');
    } catch(err){

        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }

};

//exports the function, so i can use it in other files.
module.exports = connectDB;