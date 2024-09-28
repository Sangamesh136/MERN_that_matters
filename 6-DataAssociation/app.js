const express = require("express");
const userModel = require("./model/user");
const postModel = require("./model/post");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  //   let {username,email,age} = req.body
  let createdUser = await userModel.create({
    username: "sam",
    email: "sam@sam.sam",
    age: 21,
  });
  res.send(createdUser);
});
app.get("/post/create", async (req, res) => {
  let newPost = await postModel.create({
    post: "new post",
    user: "669e86c4e2759cb16aaa08a7",
  });
  let user = await userModel.findOne({ _id: "669e86c4e2759cb16aaa08a7" });
  user.posts.push(newPost._id);
  await user.save();
  res.send({ newPost, user });
});

app.listen(3000);
