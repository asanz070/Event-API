const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongoDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DATABASE CONNECTED 👌😎')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongoDB;