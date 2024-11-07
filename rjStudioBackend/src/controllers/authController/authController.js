const jwt = require("jsonwebtoken");
const User = require("../../models/UserModel/User");
const Documents = require("../../models/UserModel/documnets");
const bcrypt = require("bcryptjs");
const { validationError } = require("../../error/error");
const {
  registerSchema,
} = require("../../validation/AuthValidation/AuthValidation");
// const { registerSchema } = require('../../validation/AuthValidation')
const uploadImageToS3 = require("../../services/UploadFIle/uploadToS3");
const stripe = require("stripe")(process.env.STRIPT_SECRET);
const { sendEmail } = require("../../services/SMTP/sendMail");

exports.register = async (req, res) => {
  try {
    const isValid = registerSchema.validate(req.body);

    if (isValid.error) {
      return res
        .status(200)
        .send(validationError(isValid.error.details[0].message));
    }

    const { value } = isValid;

    const existingUser = await User.findOne({ email: value.email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(value.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    sendEmail(
      "",
      req.body.email,
      "successfully register",
      "congratulation you have successfully register",
      "<h1>Hello from Node.js!</h1><p>This is a test email sent from Node.js.</p>"
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;

  const userDetail = await User.findOne({ email: userName });

  try {
    if (userName === userDetail?.email && userDetail !== null) {
      bcrypt.compare(password, userDetail?.password, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          res.status(500).json({ message: "Internal server error" });
        } else {
          if (result) {
            const token = jwt.sign({ userName }, "rjStudioToken", {
              expiresIn: "1h",
            });
            res.status(200).json({ message: "Login successful", token });
          } else {
            res.status(401).json({ message: "Invalid username or password" });
          }
        }
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.log("this is error", error);
  }
};

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("req.file:", req.file);

    const { originalname, buffer, mimetype } = req.file;

    // Use buffer instead of path
    const url = await uploadImageToS3(buffer, originalname, mimetype);

    res.status(200).json({ message: "File uploaded successfully", url });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.makePaymaneMethod1 = async (req, res) => {
  const { products } = req.body;

  // const lineItems = products.map((product) => ({
  //   price_data: {
  //     currency: "inr",
  //     product_data: {
  //       name: product.name,
  //       images: [product.image]
  //     },
  //     unit_amount: Math.round(product.price * 100),
  //   },
  //   quantity: product.quantity
  // }));

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
        images: [product.image],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3001/sucess",
    cancel_url: "http://localhost:3001/cancel",
  });

  res.json({ id: session.id });
};

exports.makePaymaneMethod1 = async (req, res) => {
  try {
    const { products } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "No products provided" });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name || "Unnamed Product",
          images: product.image ? [product.image] : [],
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3001/success",
      cancel_url: "http://localhost:3001/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.makePaymaneMethod = async (req, res) => {
  try {
    const { products, customerName, customerAddress } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "No products provided" });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Damond Frame",
          images: product.image ? [product.image] : [],
        },
        unit_amount: Math.round(500 * 100),
      },
      quantity: product.quantity || 1,
    }));

    console.log("lineItemslineItemslineItems", lineItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://vercel-deployment-client-brown.vercel.app/success",
      cancel_url: "https://vercel-deployment-client-brown.vercel.app/cancel",
    });

    console.log("sessionsessionsessionsessionsessionsession", session);

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
