require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

connectDB();

app.use("/api/meetup", require("./routes/meetup"));

app.listen(5000, () => console.log("Server running on port 5000"));
