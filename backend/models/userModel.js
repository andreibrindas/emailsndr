const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please add your first name"],
    },
    lname: {
      type: String,
      required: [true, "Please add your last name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email address"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
