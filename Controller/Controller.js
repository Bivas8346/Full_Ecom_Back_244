const BannerModel = require("../Model/banner");
const ContactModel = require("../Model/contact");
const AboutModel = require("../Model/about");
const MensProductModel = require("../Model/mens");
const WomensProductModel = require("../Model/womens");
const KidsProductModel = require("../Model/Kids");
const AccacorisModel = require("../Model/accacorise");
const TeamModel = require("../Model/team");
const crypto = require("crypto");
const Razorpay = require("razorpay");

// Post All User Problems Request
const Contact = async (req, res) => {
  try {
    const contactData = await new ContactModel({
      about: req.body.about,
      email: req.body.email,
      message: req.body.message,
    });
    const contact = await contactData.save();
    return res.status(201).json({
      success: true,
      message: "contact data added successfully",
      data: contact,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "contact data not added" });
  }
};

// Get all banners from the database
const Banner = async (req, res) => {
  try {
    const bannerData = await BannerModel.find();
    res
      .status(200)
      .json({ success: true, messsage: "get Banner data", data: bannerData });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not get banner Data" });
  }
};

// Get all aboutdata from database
const About = async (req, res) => {
  try {
    const aboutData = await AboutModel.find();
    res
      .status(200)
      .json({ success: true, message: "get About Data", data: aboutData });
  } catch (error) {
    res.status(404).json({ sucess: false, message: "No About Data Found!" });
  }
};

// Get all mens product data from database
const Mens = async (req, res) => {
  try {
    const mensData = await MensProductModel.find();
    res.status(200).json({
      success: true,
      count: mensData.length,
      data: mensData,
      message: "Men Product List",
    });
  } catch (error) {
    res.status(400).send({ success: false, message: "No Data Found!" });
  }
};

// Get all womens product data from dtabase
const Womens = async (req, res) => {
  try {
    const womensData = await WomensProductModel.find();
    res.status(200).json({
      success: true,
      data: womensData,
      message: "Women Products List",
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: "No Data Found!" });
  }
};

const WomensSingle = async (req, res) => {
  // Find data by id
  if (req.params.id) {
    const singleData = await WomensProductModel.findById(req.params.id);

    if (!singleData) {
      return res
        .status(404)
        .json({ success: false, message: "No Single Data found" });
    } else {
      res.status(200).json({
        success: true,
        data: singleData,
      });
    }
  } else {
    // Send data list
    const womensListData = await WomensProductModel.find().sort("-createAt");
    res.status(200).json(womensListData);
  }
};

// Get all kids data from dtabase
const Kids = async (req, res) => {
  try {
    const kidsData = await KidsProductModel.find();
    res
      .status(200)
      .json({ success: true, data: kidsData, message: "Kids products List" });
  } catch (error) {
    res.status(400).json({ success: false, message: "No Data Found!" });
  }
};

// Get All accecoris data from database
const Accessories = async (req, res) => {
  try {
    const accessorisData = await AccacorisModel.find();
    res.status(200).json({
      success: true,
      data: accessorisData,
      message: "Accessories List",
    });
  } catch (error) {
    res.status(400).send({ success: false, message: "No Data  Found!" });
  }
};

// Get Single data from the database using id
// const getSingleAccItem = async (req, res) => {
//   const accId = req.params.id;
//   const singleData = await AccacorisModel.findById(accId);
//   if (!singleData) return res.status(404).json({ msg: "Data is not found" });
//   res.status(200).json(singleData);
// };

// Get all team data from Database
const Team = async (req, res) => {
  try {
    const teamMembers = await TeamModel.find();
    res.status(200).json({
      success: true,
      data: teamMembers,
      message: "Team Members list",
      count: teamMembers.length,
    });
  } catch (error) {
    res.status(400).send({ success: false, message: "No Data Found!" });
  }
};

// Payment Part
const Payment = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: rzp_test_4gZVni03nkdfdY,
      key_secret: mvPpd4OCf5J50TQx1cgSujq3,
    });

    const options = {
      amount: req.body.amount * 100, // amount in the smallest
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    razorpay.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error");
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

const PaymentVerify = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("SHA256", mvPpd4OCf5J50TQx1cgSujq3)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res
        .status(200)
        .json({ message: "Transaction verified successfully" });
    } else {
      return res
        .status(400)
        .json({ message: "Transaction is not done poperly" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

// cart Part

// const Addcart = async(req,res)=>{
//     try {
//         const contactData = await new ContactModel({
//             about: req.body.about,
//             email: req.body.email,
//             message: req.body.message,
//         })
//         const contact = await contactData.save();
//         return res.status(201).json({ success: true, message: "contact data added successfully", data: contact })
//     }
//     catch (error) {
//         return res.status(404).json({ success: false, message: "contact data not added" })
//     }
// }

// const Removecart = async(req,res)=>{

// }

// const  Updatecart = async(req,res)=>{

// }

module.exports = {
  Banner,
  Contact,
  About,
  Mens,
  Womens,
  Kids,
  Accessories,
  Team,
  Payment,
  PaymentVerify,
};
