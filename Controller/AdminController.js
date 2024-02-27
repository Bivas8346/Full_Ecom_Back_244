const BannerModel = require("../Model/banner");
const MensProductModel = require("../Model/mens");
const WomensProductModel = require("../Model/womens");
const KidsProductModel = require("../Model/Kids");
const AccacorisModel = require("../Model/accacorise");
const ContactModel = require("../Model/contact");
const AdminModel = require("../Model/admin");
const AboutModel = require("../Model/about");
const TeamModel = require("../Model/team");
const UserModel = require("../Model/user");
const CategoryModel = require("../Model/category");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const path = require("path");

exports.dashbord = (req, res) => {
  res.render("Component/Dashbord", { title: "Admin Dashbord" });
};

// Admin Login
exports.login = (req, res) => {
  res.render("Component/Login", { title: "Admin Login" });
};

exports.logIn = (req, res) => {
  console.log(req.body);
  AdminModel.findOne({ email: req.body.email }).then((data) => {
    if (data) {
      const pwd = data.password;
      if (bcryptjs.compareSync(req.body.password, pwd)) {
        const token = jwt.sign(
          {
            id: data._id,
            name: data.name,
            email: data.email,
          },
          "BIVAS4246",
          { expiresIn: "24h" }
        );
        console.log(token);
        console.log(data.name);
        res.cookie("adminToken", token);
        res.cookie("name", data.name);
        res.cookie("email", data.email);
        res.cookie("password", data.password);
        res.redirect("/");
      } else {
        req.flash("massage", "password not match");
        console.log("password not match");
        res.redirect("/login");
      }
    } else {
      req.flash("massage", "Your are not admin");
      console.log("You are not Admin");
      res.redirect("/login");
    }
  });
};

//Admin Logout

exports.Logout = (req, res) => {
  res.clearCookie("adminToken");
  res.clearCookie("name");
  res.clearCookie("email");
  res.clearCookie("password");
  res.redirect("/login");
};

// Admin Registration
exports.register = (req, res) => {
  res.render("Component/Register", { title: "Admin Registration" });
};

exports.adminReg = (req, res) => {
  console.log(req.body);
  const user = new AdminModel({
    name: req.body.name,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(10)),
  });
  user
    .save()
    .then((data) => {
      if (data) {
        console.log("Admin added successfully..");
        res.redirect("/");
      }
    })
    .catch((err) => {
      console.log(err, "Admin not added");
    });
};

// Admin Authentication
exports.adminAuth = (req, res, next) => {
  if (req.admin) {
    console.log(req.admin);
    next();
  } else {
    console.log("error while Auth");
    res.redirect("/");
  }
};

exports.Form = (req, res) => {
  res.render("Component/Form", { title: "Admin Data Adding Form" });
};

// Team For Admin
exports.Team = (req, res) => {
  // res.render("Component/Team", { title: "Admin Team Data" });

  TeamModel.find()
    .then((team) => {
      console.log(team);
      res.render("Component/Team", {
        team,
        title: "Admin Team Data",
      });
    })
    .catch((error) => {
      res.render("Component/Team", {
        Error: `Error Occured: ${team}`,
      });
    });
};

exports.teamedit = (req, res) => {
  const tmid = req.params.id;
  TeamModel.findById(tmid)
    .then((tme) => {
      console.log(tme);
      res.render("Component/TeamEdit", {
        tme,
        title: "Team Data Editing Form",
      });
    })
    .catch((err) => {
      res.render("Component/TeamEdit", {
        error: `happend something error, cant load`,
      });
    });
};

// Contact Notification
exports.notification = (req, res) => {
  ContactModel.find()
    .then((contac) => {
      console.log(contac);
      res.render("Component/Notification", {
        contac,
        title: "Admin Notification",
      });
    })
    .catch((error) => {
      res.render("Component/Notification", {
        Error: `Error Occured: ${contac}`,
      });
    });
};

// Admin Profile
exports.setting = (req, res) => {
  res.render("Component/Setting", { title: "Admin Profile" });
};

exports.invoice = (req, res) => {
  res.render("Component/Innvoice", { title: "Order Invoice" });
};

// Admin Banner Part
exports.banneradd = (req, res) => {
  BannerModel.find()
    .then((banner) => {
      console.log(banner);
      res.render("Component/BannerAdd", {
        banner,
        title: "Banner Data Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/BannerAdd", { Error: `Error Occured: ${banner}` });
    });
};

exports.try = (req, res) => {
  res.render("Component/Justtry", { title: "Banner Data Adding Form" });
};

exports.Table = (req, res) => {
  res.render("Component/Table", { title: "Admin Data Table" });
};

// Admin Men's Part
exports.mensadd = (req, res) => {
  MensProductModel.find()
    .then((mens) => {
      console.log(mens);
      res.render("Component/Mensadd", {
        mens,
        title: "Men's Product Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Mensadd", { Error: `Error Occured: ${mens}` });
    });
};

// Admin Women's part
exports.Womensadd = (req, res) => {
  WomensProductModel.find()
    .then((womens) => {
      console.log(womens);
      res.render("Component/Wemensadd", {
        womens,
        title: "Men's Product Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Wemensadd", { Error: `Error Occured: ${womens}` });
    });
};

// Admin Kid's Part
exports.Kidsadd = (req, res) => {
  KidsProductModel.find()
    .then((kids) => {
      console.log(kids);
      res.render("Component/Kidsadd", {
        kids,
        title: "Kid's Product Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Kidsadd", { Error: `Error Occured: ${kids}` });
    });
};

// Admin Accecoris Part
exports.accacorisadd = (req, res) => {
  AccacorisModel.find()
    .then((accas) => {
      console.log(accas);
      res.render("Component/Accacorisadd", {
        accas,
        title: "Accacoris Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Accacorisadd", {
        Error: `Error Occured: ${accas}`,
      });
    });
};

// Admin About Part
exports.aboutadd = (req, res) => {
  // res.render('Component/Aboutadd', { title: "About Adding Form" })

  AboutModel.find()
    .then((about) => {
      console.log(about);
      res.render("Component/Aboutadd", {
        about,
        title: "About Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Aboutadd", {
        Error: `Error Occured: ${about}`,
      });
    });
};

// User Watch
exports.user = (req, res) => {
  // res.render("Component/User", { title: "User Data Table" });

  UserModel.find()
  .then((user) => {
    console.log(user);
    res.render("Component/User", {
      user,
      title: "User Data Table",
    });
  })
  .catch((error) => {
    res.render("Component/User", {
      Error: `Error Occured: ${user}`,
    });
  });
};

// Admin Category Part
exports.categoryadd = (req, res) => {
  CategoryModel.find()
    .then((cate) => {
      console.log(cate);
      res.render("Component/Categort", {
        cate,
        title: "Banner Data Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Categort", { Error: `Error Occured: ${cate}` });
    });
};

// Admin Subcategory Part

exports.subcategoryadd = (req, res) => {
  BannerModel.find()
    .then((banner) => {
      console.log(banner);
      res.render("Component/Subcategory", {
        banner,
        title: "Banner Data Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/Subcategory", { Error: `Error Occured: ${banner}` });
    });
};

// Admin Products Part

exports.productadd = (req, res) => {
  MensProductModel.find()
    .then((mens) => {
      console.log(mens);
      res.render("Component/product", {
        mens,
        title: "Men's Product Adding Form",
      });
    })
    .catch((error) => {
      res.render("Component/product", { Error: `Error Occured: ${mens}` });
    });
};