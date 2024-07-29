const express = require("express");
const posts = require("./routes/posts");
const path = require("path");
const exp = require("constants");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// let posts = [
//   {
//     id: 1,
//     title: "post 1",
//   },
//   {
//     id: 2,
//     title: "post 2",
//   },
// ];
// // params
// // get all the posts
// app.get("/api/post", (req, res) => {
//   const limit = parseInt(req.params.limit);
//   if (!isNaN(limit)) {
//     res.status(200).json(posts(0, limit));
//   } else {
//     res.status(200).json(posts);
//   }
// });
// // inorder to get only 1 post:
// app.get("/api/post/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === id);
//   if (!post) {
//     res.status(404).json({ message: "the requested post doesnt exists" });
//   } else {
//     res.json(post);
//   }
// });

// Posts
app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`Server running @ PORT ${PORT}`);
});
