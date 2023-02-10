const mongoose = require("mongoose");

//schema for projects
const projectSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  "project name": {
    type: String,
  },
  "project description": {
    type: String,
  },
  pronouns: {
    type: String,
  },
  lgbtq: {
    type: String,
  },
  disabled: {
    type: String,
  },
  veteran: {
    type: String,
  },
});

module.exports = mongoose.model("projects", projectSchema);