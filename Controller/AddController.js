const BannerModel = require("../Model/banner");
const MensProductModel = require("../Model/mens");
const WomensProductModel = require("../Model/womens");
const KidsProductModel = require("../Model/Kids");
const AccacorisModel = require("../Model/accacorise");
const ContactModel = require("../Model/contact");
const AboutModel = require("../Model/about");
const TeamModel = require("../Model/team");
const CategoryModel = require("../Model/category");
const SubcategoryModel = require("../Model/subcategory");

// bannerpart
exports.createbanner = (req, res) => {
  console.log(req.body);
  const banner = new BannerModel({
    title: req.body.title,
    description: req.body.description,
  });
  banner
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "data not save");
      res.redirect("/banneradd");
    });
};

exports.bannerdelete = (req, res) => {
  const bid = req.params.id;
  BannerModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/banneradd");
    })
    .catch((err) => {
      console.log(err);
    });
};

// MensProduct Part
exports.createmens = (req, res) => {
  console.log(req.body);
  const menspro = new MensProductModel({
    productname: req.body.productname,
    producttype: req.body.producttype,
    productdesc: req.body.productdesc,
    productsize: req.body.productsize,
    productprice: req.body.productprice,
    productbrand: req.body.productbrand,
    productabout: req.body.productabout,
  });
  menspro
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "data not added");
      res.redirect("/mensproadd");
    });
};

exports.mensdelete = (req, res) => {
  const bid = req.params.id;
  MensProductModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/mensproadd");
    })
    .catch((err) => {
      console.log(err);
    });
};

// WomensProduct Parts

exports.createwomens = (req, res) => {
  console.log(req.body);
  const womenspro = new WomensProductModel({
    productname: req.body.productname,
    producttype: req.body.producttype,
    productdesc: req.body.productdesc,
    productsize: req.body.productsize,
    productprice: req.body.productprice,
    productbrand: req.body.productbrand,
    productabout: req.body.productabout,
  });
  womenspro
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "data not added");
      res.redirect("/womensproadd");
    });
};

exports.womensdelete = (req, res) => {
  const bid = req.params.id;
  WomensProductModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/womensproadd");
    })
    .catch((err) => {
      console.log(err);
    });
};

// KidsProducts Part

exports.createkids = (req, res) => {
  console.log(req.body);
  const kidspro = new KidsProductModel({
    productname: req.body.productname,
    producttype: req.body.producttype,
    productdesc: req.body.productdesc,
    productsize: req.body.productsize,
    productprice: req.body.productprice,
    productbrand: req.body.productbrand,
    productabout: req.body.productabout,
  });
  kidspro
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "data not added");
      res.redirect("/kidsproadd");
    });
};

exports.kidsdelete = (req, res) => {
  const bid = req.params.id;
  KidsProductModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/kidsproadd");
    })
    .catch((err) => {
      console.log(err);
    });
};

// AccacorisProduct Part

exports.createaccac = (req, res) => {
  console.log(req.body);
  const accacpro = new AccacorisModel({
    productname: req.body.productname,
    producttype: req.body.producttype,
    productdesc: req.body.productdesc,
    productsize: req.body.productsize,
    productprice: req.body.productprice,
    productbrand: req.body.productbrand,
    productabout: req.body.productabout,
  });
  accacpro
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "data not added");
      res.redirect("/accacorisproadd");
    });
};

exports.accacorisdelete = (req, res) => {
  const bid = req.params.id;
  AccacorisModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/accacorisproadd");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Notification Part

exports.notificationdelete = (req, res) => {
  const bid = req.params.id;
  ContactModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/notification");
    })
    .catch((err) => {
      console.log(err);
    });
};

// About Part

exports.createabout = (req, res) => {
  console.log(req.body);
  const about = new AboutModel({
    about_title: req.body.about_title,
    about_content: req.body.about_content,
    about_service: req.body.about_service,
  });
  about
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "about added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "about data not added");
      res.redirect("/aboutadd");
    });
};

exports.aboutdelete = (req, res) => {
  const bid = req.params.id;
  AboutModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/aboutadd");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Team Part

exports.createteam = (req, res) => {
  console.log(req.body);
  const team = new TeamModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
  });
  team
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "team mamber added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "team mamber not added");
      res.redirect("/team");
    });
};

exports.updateteam = (req, res) => {
  const user_id = req.body.t_id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const position = req.body.position;

  TeamModel.findById(user_id)
    .then((result) => {
      result.name = name;
      result.email = email;
      result.phone = phone;
      result.position = position;
      return result
        .save()
        .then((result) => {
          res.redirect("/team");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.teamdelete = (req, res) => {
  const bid = req.params.id;
  TeamModel.deleteOne({ _id: bid })
    .then((del) => {
      console.log(del, "delete successfully");
      res.redirect("/team");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Category Part
exports.createcategory = (req, res) => {
  console.log(req.body);
  const category = new CategoryModel({
    Category_name: req.body.Category_name,
  });
  category
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "added successfully",
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "data not save");
      res.redirect("/category");
    });
};