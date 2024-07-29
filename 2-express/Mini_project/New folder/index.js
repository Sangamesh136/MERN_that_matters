const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/profile/:userId", (req, res) => {
  const userId = req.params.userId;

  res.status(200).send(userId);
});

app.listen(PORT, () => {
  console.log(`Server is running @ PORT ${PORT}`);
});
