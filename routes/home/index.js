const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "home";
  next();
});

router.get("/", (req, res) => {
  //   res.send("this is working dude!!");
  res.render("home/index");
});
router.get("/world", (req, res) => {
  res.render("home/world");
});
router.get("/aygul", (req, res) => {
  // res.send("working");
  res.render("home/aygul");
});
router.get("/bala", (req, res) => {
  // res.send("working");
  res.render("home/bala");
});
router.get("/gonca", (req, res) => {
  // res.send("working");
  res.render("home/gonca");
});
router.get("/halima", (req, res) => {
  // res.send("working");
  res.render("home/halima");
});
router.get("/malhun", (req, res) => {
  // res.send("working");
  res.render("home/malhun");
});
router.get("/selcan", (req, res) => {
  // res.send("working");
  res.render("home/selcan");
});
router.get("/aslihan", (req, res) => {
  // res.send("working");
  res.render("home/aslihan");
});

module.exports = router;
