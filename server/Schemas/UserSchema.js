// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema(
//   {
//     FirstName: String,
//     LastName: String,
//     UserId: Number,
//     name: { type: String, required: true },
//     picture: String,
//     email: { type: String, required: true },
//     portfolios: Array,
//     profile: Object,
//     chats: Array
//   }
// )

// const Users = mongoose.model("Users", userSchema);

// module.exports = Users

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  UserId: Number,
  name: { type: String, required: true },
  picture: String,
  email: { type: String, required: true },
  portfolios: Array,
  profile: Object,
  chats: Array,
});

// Prevent re-compilation of model in serverless environment
const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

module.exports = Users;
