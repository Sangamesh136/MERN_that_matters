const express = require("express");
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "p1",
  },
  {
    id: 2,
    title: "p2",
  },
  {
    id: 3,
    title: "p3",
  },
];

// Read operation
router.get("/", (req, res) => {
  const limits = parseInt(req.query.limit);
  if (!isNaN(limits)) {
    return res.status(200).json(posts.slice(0, limits));
  }
  res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);
  if (post) {
    return res.status(200).json(post);
  }
  res.status(404).json({ message: "requested post not found" });
});

// create operation
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  console.log(newPost);
  if (!newPost) {
    res.status(404).json({ message: "no post was created" });
  } else {
    posts.push(newPost);
  }
  console.log(posts);
  res.status(201).json(posts);
});

// update operation:
router.put("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);
  if (!post) {
    res.status(404).json({ msg: "no such post found" });
  } else {
    post.title = req.body.title;
    res.status(200).json(post);
  }
});

// delete operation:
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  const post = posts.find((posts) => posts.id === id);
  if (!post) {
    res.status(404).json({ msg: "post not found" });
  } else {
    posts = posts.filter((posts) => posts.id !== id);
    res.status(200).json(posts);
  }
});
module.exports = router;
