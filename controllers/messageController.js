const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

exports.messages = asyncHandler(async (req, res, next) => {
  Message.find()
    .sort({ createdAt: -1 })
    .then((data) =>
      res.render("index", { title: "Message Board", messages: data })
    );
});

exports.messageForm = asyncHandler(async (req, res, next) =>
  res.render("form", { errors: null })
);

exports.createMessage = asyncHandler(async (req, res, next) => {
  Message.create({ ...req.body })
    .then(() => res.redirect("/"))
    .catch((error) => {
      res.render("form", { errors: error.errors });
    });
});
