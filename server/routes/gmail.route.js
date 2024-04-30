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

gmailRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newMail = new GmailModel(payload);
    await newMail.save();
    res.status(200).json({ msg: "A new Gmail has been created" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

gmailRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await GmailModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: `gmail with ${id} deleted` });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { gmailRouter };
