// routing.js 파일

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
const DB = require("./database");

const bootstrapcss =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
const bootstrapjs =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
router.get("/", (req, res) => {
  res.render("home", {
    bootstrapcss,
    bootstrapjs,
    title: "왔노라 | 홈",
    message: "Welcome to the Home Page!",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    bootstrapcss,
    bootstrapjs,
    title: "왔노라 | 정보",
    message: "This is the About Page!",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    bootstrapcss,
    bootstrapjs,
    title: "왔노라 | 연락",
    message: "Get in touch with us!",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    bootstrapcss,
    bootstrapjs,
    title: "왔노라 | 회원가입",
    message: "Get in touch with us!",
  });
});

router.get("/services", (req, res) => {
  res.render("services", {
    bootstrapcss,
    bootstrapjs,
    title: "왔노라 | 서비스",
    message: "Get in touch with us!",
  });
});
router.get("/login", (req, res) => {
  res.render("login", {
    bootstrapcss,
    bootstrapjs,
    title: "왔노라 | 로그인",
    message: "Get in touch with us!",
  });
});

router.post("/submit", (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  const email = req.body.email;
  DB.indb(username, password);
  res.redirect("/");
});

module.exports = {
  home: router,
  about: router,
  contact: router,
  register: router,
  submit: router,
};
