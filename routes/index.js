var express = require("express");
var router = express.Router();
const messageController = require("../controllers/messageController")

/* GET Message Board*/
router.get("/", messageController.messages);

/* GET New message form. */
router.get("/new", messageController.messageForm);

/* POST Message. */
router.post("/new", messageController.createMessage);

module.exports = router;
