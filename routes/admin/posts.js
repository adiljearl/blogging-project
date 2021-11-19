const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "admin";
  next();
});

router.get("/create", (req, res, next) => {
  // res.send("create route");
  res.render("admin/posts/create");
});

router.get("/allPosts", (req, res) => {
  // res.send("create route");
  res.render("admin/posts/allPost");
});

module.exports = router;
