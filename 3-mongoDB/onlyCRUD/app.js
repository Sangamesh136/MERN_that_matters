const express = require("express");
const app = express();
const userModel = require("./usermodel");
const { default: mongoose } = require("mongoose");

app.get("/", (req, res) => {
  res.send("HEllo world");
});

app.get("/create", async (req, res) => {
  let newUser = await userModel.create({
    name: "sangamesh",
    age: "21",
    email: "sangameshvu136@gmail.com",
  });
  res.status(201).send(newUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.status(200).send(users);
});
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { name: "sangamesh" },
    { age: "22" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ name: "sangamesh" });
  res.send(deletedUser);
});

app.listen(3000);
