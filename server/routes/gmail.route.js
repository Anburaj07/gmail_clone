const express = require("express");
const { GmailModel } = require("../models/gmail.model");
const gmailRouter = express.Router();

gmailRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const gmails = await GmailModel.find(query);
    res.status(200).json(gmails);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = { gmailRouter };
