const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const connectFlash = require("connect-flash");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  expressSession({
    cookie: {
      maxAge: 60000,
    },
    secret: "BIVAS4246",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(connectFlash());
app.use(cookieParser());

app.use(express.static("Fremwork"));
app.use("/public", express.static(path.join(__dirname, "public")));

const AdminRouter = require("./Router/AdminRouter");
app.use(AdminRouter);

const ApiRouter = require("./Router/Router");
app.use("/api", ApiRouter);

datacon =
  "mongodb+srv://rajdasrd8346:gyc4uEoZBZ1jg8d9@cluster0.ujxgdoi.mongodb.net/ecommtest";

const port = 4887;
mongoose
  .connect(datacon, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
      console.log(`data base connected successfully`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
