const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

const ApiRouter = express.Router();

ApiRouter.use(express.json());
ApiRouter.use(express.urlencoded({ extended: true }));
ApiRouter.use(bodyparser.json());
ApiRouter.use(bodyparser.urlencoded({ extended: true }));
ApiRouter.use(express.static("public"));

const Controller = require("../Controller/Controller");
const UserController = require("../Controller/UserController")

// Registration Part
ApiRouter.post("/Registration",UserController.registration);

// Login Part
// ApiRouter.get('/LoginCheck/:id',UserController.logincheck);
ApiRouter.post("/Login",UserController.UserLogin);

// Banner Part
ApiRouter.get('/Banner',Controller.Banner);

// About Part
ApiRouter.get("/About",Controller.About);

// Contact Part
ApiRouter.post('/Contact',Controller.Contact);

// Teammamber Part
ApiRouter.get("/Team",Controller.Team);

// Mens Part
ApiRouter.get("/Men's",Controller.Mens);

// Womens Part
ApiRouter.get("/Women's",Controller.Womens);

// Kids Part
ApiRouter.get("/Kid's",Controller.Kids);

// Accessoris Part
ApiRouter.get("/Accessoris",Controller.Accessories);

// Payment Part
ApiRouter.post("/Payment",Controller.Payment);
ApiRouter.post("/PaymentVerify",Controller.PaymentVerify);

// Product  Detail Page
ApiRouter.get("/product",Controller.Product);
ApiRouter.post("/singleProduct/:id",Controller.getProductByID)

module.exports = ApiRouter;
