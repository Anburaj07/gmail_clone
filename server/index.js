const express = require("express");

const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const { connection } = require("./db");
const { gmailRouter } = require("./routes/gmail.route");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/gmails",gmailRouter)

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Gmail_Clone server base point" });
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
    console.log(`Server is running at ${port}`);
  } catch (error) {
    console.log(error);
  }
});
