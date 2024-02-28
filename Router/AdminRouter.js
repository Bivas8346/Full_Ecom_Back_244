const express = require("express");

const AdminRouter = express.Router();
AdminRouter.use(express.static("Fremwork"));

const AdminControlller = require("../Controller/AdminController");
const AddController = require("../Controller/AddController");
const UploadProduct = require("../Middleware/ProductImage");
const UploadTeam = require("../Middleware/TeamImage");
const UploadBanner = require("../Middleware/BannerImage");

AdminRouter.get("/", AdminControlller.dashbord);

// LoginSection
AdminRouter.get("/login", AdminControlller.login);
AdminRouter.post("/loginadmin",AdminControlller.logIn);
AdminRouter.get('/logout',AdminControlller.Logout);

// RegistrationSection
AdminRouter.get("/register", AdminControlller.register);
AdminRouter.post("/createadmin",AdminControlller.adminReg);


AdminRouter.get("/form", AdminControlller.Form);
AdminRouter.get("/table", AdminControlller.Table);
AdminRouter.get("/profile", AdminControlller.setting);
AdminRouter.get("/invoice", AdminControlller.invoice);

// BannerSection
AdminRouter.get("/banneradd", AdminControlller.banneradd);
AdminRouter.post("/addbanner",UploadBanner.single("image"), AddController.createbanner);
AdminRouter.get("/deletbanner/:id", AddController.bannerdelete);

// MensProductSection
AdminRouter.get("/mensproadd", AdminControlller.mensadd);
AdminRouter.post("/mensaddproduct", AddController.createmens);
AdminRouter.get("/mensprodelet/:id", AddController.mensdelete);

// WomensProductSection
AdminRouter.get("/womensproadd", AdminControlller.Womensadd);
AdminRouter.post("/womensaddproduct", AddController.createwomens);
AdminRouter.get('/womensprodelet/:id',AddController.womensdelete);

// KidsProductSection 
AdminRouter.get("/kidsproadd", AdminControlller.Kidsadd);
AdminRouter.post("/kidsaddproduct", AddController.createkids);
AdminRouter.get("/kidsprodelet/:id", AddController.kidsdelete);

// AccacorisSection
AdminRouter.get("/accacorisproadd",AdminControlller.accacorisadd);
AdminRouter.post('/accacaddproduct',AddController.createaccac);
AdminRouter.get("/accacprodelet/:id",AddController.accacorisdelete);

// AboutSection
AdminRouter.get("/aboutadd",AdminControlller.aboutadd);
AdminRouter.post("/addabout",AddController.createabout);
AdminRouter.get("/aboutdelet/:id",AddController.aboutdelete);

// NotificationSection
AdminRouter.get("/notification", AdminControlller.notification);
AdminRouter.get("/notidelet/:id",AddController.notificationdelete);

// TeamSection
AdminRouter.get("/team", AdminControlller.Team);
AdminRouter.post("/teamadd",UploadTeam.single("image"),AddController.createteam);
AdminRouter.get("/teamedit/:id",AdminControlller.teamedit);
AdminRouter.post("/teamupdate",AddController.updateteam);
AdminRouter.get("/teamdelet/:id",AddController.teamdelete);

// UserSection
AdminRouter.get("/user", AdminControlller.user);

// Category Wish Product add
AdminRouter.get("/category", AdminControlller.categoryadd);
AdminRouter.post("/catagoryadd",AddController.createcategory);

// SubCategory Wish Product Add
AdminRouter.get("/subcategory", AdminControlller.subcategoryadd);
AdminRouter.post("/subcatagoryadd",AddController.createsubcategory);
AdminRouter.get("/subcatedelet/:id",AddController.subcategorydelete);


// Product Add
AdminRouter.get("/products", AdminControlller.productadd);
AdminRouter.post("/productadd", UploadProduct.array("image", 5),AddController.createproduct);
AdminRouter.get("/productdelet/:id",AddController.productdelete);



AdminRouter.get("/try", AdminControlller.try);

module.exports = AdminRouter;
