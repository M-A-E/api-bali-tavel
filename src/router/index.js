const express = require("express");
const { getAllCountry } = require("../controller/nationality");
const { createMessage } = require("../controller/sendMessage");
const route = express.Router();

route.get("/country", getAllCountry);
route.post("/send/message", createMessage);


module.exports = route
