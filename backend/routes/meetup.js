const express = require("express");
const Router = express.Router();

const { addMeetup, getMeetups } = require("../controller/meetup");

Router.get("/", getMeetups);

Router.post("/", addMeetup);

module.exports = Router;
