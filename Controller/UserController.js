const UserModel = require("../Model/user");
const Config = require("../Config/config");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Registration

const securePassword = async (password) => {
  try {
    const passwordHas = await bcryptjs.hash(password, 10);
    return passwordHas;
  } catch (error) {
    console.log(error);
  }
};

const registration = async (req, res) => {
  try {
    const setpassword = await securePassword(req.body.password);
    const User = new UserModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: setpassword,
    });
    const userdata = await User.collection.findOne({ email: req.body.email });
    if (userdata) {
      return res
        .status(404)
        .send({ success: false, message: "This mail already exist" });
    } else {
      const Usdata = await User.save();
      console.log(Usdata, "User Added Successfully");
      //   const tokenData = await createToken(Usdata._id);
      return res
        .status(200)
        .send({ success: true, data: Usdata,  });
        // token: tokenData
    }
  } catch (error) {
    console.log(error.message);
  }
};

// User Login

const createToken = async (id) => {
  try {
      const token = await jwt.sign({ _id: id }, Config.secretjwt, { expiresIn: "1h" });
      return token
  }
  catch (error) {
      console.log(error);
  }
}

const UserLogin = async (req, res) => {
  try {
      const Loguser = await UserModel.findOne({ email: req.body.email });

      const password = req.body.password
      if (Loguser && (await bcryptjs.compare(password, Loguser.password))) {
          const tokenData = await createToken(Loguser._id)
          console.log(Loguser, "User login Successfully");
          console.log(tokenData);
          return res.status(200).json({ "User": Loguser, "token": tokenData });
      }
      return res.status(400).send("Invalide Data");
  }
  catch (error) {
      console.log(error);
  }
}


module.exports = {
  registration,
  UserLogin,
};
