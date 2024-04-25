const mongoose = require("mongoose");

const gmailSchema = mongoose.Schema({
  from: String,
  subject: String,
  content: String,
  date: String,
});

const GmailModel = mongoose.model("gmail", gmailSchema);

module.exports = { GmailModel };
