const mongoose = require('mongoose');

const connectDB = async (DB_URL) => {
    try {
        const options = {
            dbName: "urlShortener",
        };
        await mongoose.connect(DB_URL, options);
        console.log("MongoDB connection successful");

    }
    catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;