const Meetup = require("../models/meetup");
const asyncHandler = require("express-async-handler");

const addMeetup = asyncHandler(async (req, res) => {
  // Get data from req
  const { title, image, address, description } = req.body;
  console.log(req.body);
  // Create meetup object
  const meetup = await Meetup.create({
    title,
    image,
    address,
    description,
  });

  if (meetup) {
    res.status(201).json({
      id: meetup.id,
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      description: meetup.description,
    });
  }
});

const getMeetups = asyncHandler(async (req, res) => {
  const meetups = await Meetup.find();

  if (meetups) {
    res.status(200).send(meetups);
  }
});

module.exports = { addMeetup, getMeetups };
