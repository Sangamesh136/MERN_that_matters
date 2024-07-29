const exp = require("constants");
const express = require("express");
const path = require("path");
const fs = require("fs");
const { name } = require("ejs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //   res.status(200).render("index");
  fs.readdir(`./tasks`, (err, files) => {
    res.status(200).render("index", { files: files });
  });
});
app.post("/create-post", (req, res) => {
  //   console.log(req.body);
  fs.writeFile(
    `./tasks/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    }
  );
});

app.get("/tasks/:filename", (req, res) => {
  const filename = req.params.filename;
  console.log(filename);
  fs.readFile(`tasks/${filename}`, "utf-8", (err, filedata) => {
    console.log(filedata);
    res.render("content", { filename: filename, filedata: filedata });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit");
});
app.listen(PORT, () => {
  console.log(`Server is running @ PORT: ${PORT}`);
});
