// const mongoose = require('mongoose')
// require("dotenv").config()

// async function connectMongoDB() {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//         console.log("Connected to MongoDB🚀")
//     }
//     catch {
//         (err => {
//             console.log("Connection to MongoDB Failed😵", err)
//         })
//     }
// }

// module.exports = connectMongoDB

const mongoose = require("mongoose");

let isConnected = false;

async function connectMongoDB() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 1, // Maintain up to 1 socket connection
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });

    isConnected = true;
    console.log("Connected to MongoDB🚀");
  } catch (err) {
    console.log("Connection to MongoDB Failed😵", err);
    throw err;
  }
}

module.exports = connectMongoDB;
