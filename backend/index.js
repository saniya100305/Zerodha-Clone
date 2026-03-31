require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* ================== DB CONNECTION ================== */
mongoose.connect(uri)
  .then(() => {
    console.log("DB connected!");

    app.listen(PORT, () => {
      console.log(`App Started on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

/* ================== ADD HOLDINGS ================== */
app.get("/addHoldings", async (req, res) => {
  try {
    let tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      }
    ];

    for (let item of tempHoldings) {
      let newHolding = new HoldingsModel({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
      });

      await newHolding.save();
    }

    res.send("Holdings added!");
  } catch (err) {
    res.status(500).send(err);
  }
});

/* ================== ADD POSITIONS ================== */
app.get("/addPositions", async (req, res) => {
  try {
    let tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      }
    ];

    for (let item of tempPositions) {
      let newPosition = new PositionsModel({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss,
      });

      await newPosition.save();
    }

    res.send("Positions added!");
  } catch (err) {
    res.status(500).send(err);
  }
});

/* ================== GET HOLDINGS ================== */
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* ================== GET POSITIONS ================== */
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* ================== ADD ORDER ================== */
app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved!");
  } catch (err) {
    res.status(500).send(err);
  }
});