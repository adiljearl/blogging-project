const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const Handlebars = require("handlebars");
const mongoose = require("mongoose");
// const upload = require("express-fileupload");
const { mongoDbUrl } = require("./config/config");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoDbUrl)
  .then(db => {
    console.log("MONGO CONNECTED");
  })
  .catch(error => console.log("not connected"));

const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars);
app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "handlebars",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", "handlebars");

const home = require("./routes/home/index");
const admin = require("./routes/admin/index");
const login = require("./routes/login/index");
const posts = require("./routes/admin/posts");
const profile = require("./routes/admin/profile");

app.use("/", home);
app.use("/admin", admin);
app.use("/login", login);
app.use("/admin/posts", posts);
app.use("/admin/profile", profile);
app.listen(5000, () => {
  console.log("working !!!");
});
