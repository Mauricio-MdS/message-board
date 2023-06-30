var express = require("express");
var router = express.Router();
const Message = require("../models/message");

/* GET Message Board*/
router.get("/", function (req, res, next) {
  Message.find()
    .sort({ createdAt: -1 })
    .then((data) =>
      res.render("index", { title: "Message Board", messages: data })
    );
});

/* GET New message form. */
router.get("/new", function (req, res, next) {
  res.render("form", { errors: null });
});

/* Post Message. */
router.post("/new", function (req, res, next) {
  Message.create({ ...req.body })
    .then(() => res.redirect("/"))
    .catch((error) => {
      res.render("form", { errors: error.errors });
    });
});

module.exports = router;
