const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.cookie("name", "sam"); // setting cookie
//   res.send("done");
// });
// app.get("/read", (req, res) => {
//   console.log(req.cookies); //reading cooking
//   res.send("done");
// });

// // password encryption and comparision
// // password encryption
// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash("password", salt, (err, hash) => {
//       console.log(hash);
//     });
//   });
// });
// // in order to check whether the password is correct or not
// app.get("/check", (req, res) => {
//   bcrypt.compare(
//     "password",
//     "$2b$10$r1.4vlnPkljr50Uas4ZOxOXV2WdTi53vuqGQdwzORorHgSkFKfjK6",
//     (err, result) => {
//       console.log(result);
//     }
//   );
// });

// jwt
// setting jwt
app.get("/", (req, res) => {
  let token = jwt.sign({ email: "sangamesh@gmail.com" }, "secret");
  console.log(token);
  res.cookie("token", token);
  res.send("done");
});
// Inorder to read JWT
app.get("/read", (req, res) => {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
  res.send("done");
});

app.listen(3000);
