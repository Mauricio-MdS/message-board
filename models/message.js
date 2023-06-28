const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "Name is required."],
      minlength: [3, "Name must be at least 3 characters long."],
      maxlength: [30, "Name must be below 30 characters long."],
    },
    text: {
      type: String,
      required: [true, "Message is required."],
      minlength: [3, "Message must be at least 3 characters long."],
      maxlength: [140, "Message must be below 140 characters long."],
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
