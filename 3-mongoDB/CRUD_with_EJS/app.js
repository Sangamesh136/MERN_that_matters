const express = require("express");
const userModel = require("./models/user");

const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let newUser = await userModel.create({
    name,
    email,
    image,
  });
  res.send(newUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  //   res.send(user);
  res.render("read", { users });
});

app.get("/update/:id", (req, res) => {
  let user_id = req.params.id;
  res.render("update.ejs", { user_id });
});
app.post("/update/:id", async (req, res) => {
  let { name, email, image } = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, email, image },
    { new: true }
  );
  // res.redirect("read");
  res.send(updatedUser);
});

app.get("/delete/:id", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(3000);
