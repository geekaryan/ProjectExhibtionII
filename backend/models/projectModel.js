const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  intensity: {
    type: Number,
  },
  topic: {
    type: String,
  },
  region: {
    type: String,
  },
  livelihood: {
    type: Number,
  },
  relevance: {
    type: Number,
  },
  end_year: {
    type: String,
  },
  sector: {
    type: String,
  },
  insight: {
    type: String,
  },
  url: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: {
    type: String,
  },
  impact: {
    type: String,
  },
  added: {
    type: String,
  },
  country: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
