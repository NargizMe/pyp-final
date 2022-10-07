const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const bodyParser = require("body-parser");
const { validationResult } = require("express-validator");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((cors()))
mongoose.connect(
  "mongodb+srv://amirovkanan:amirov1532@cluster0.mzcry9b.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => { console.log('db connected') }
);

//DB TABLE
const adsSchema = new Schema({
  name: String,
  category: String,
  supplierName: String,
  price: String,
  description: String,
  imgUrl: String,
  email: String,
});

const Ads = mongoose.model("Ads", adsSchema);

//Get All Ads 
app.get("/ads", (req, res) => {
  Ads.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

// Get by Id
app.get('/ads/:id', (req, res) => {

  let id = req.params.id;

  Ads.findById(id, (err, doc) => {
    if (!err) {
      if (doc)
        res.json(doc);
      else
        res.status(404).json({ "message": "Not found!" })
    }
    else {
      res.status(500).json(err)
    }
  })
})

// Post New Ad
app.post("/ads", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var ad = new Ads({
    name: req.body.name,
    categroy: req.body.categroy,
    supplierName: req.body.supplierName,
    price: req.body.price,
    description: req.body.description,
    email: req.body.email,
    imgUrl: req.body.imgUrl,

  });
  ad.save();
  res.send("Success!!");
});

//Update by Id
app.put('/ads/:id', (req, res) => {

  let id = req.params.id;

  Ads.findByIdAndUpdate(id, req.body, (err, doc) => {
    if (!err) {
      res.json({ 'message': 'success' });
    }
    else {
      res.status(500).json(err);
    }
  })
})

//Delete by Id
app.delete('/ads/:id', (req, res) => {

  let id = req.params.id;

  Ads.findByIdAndDelete(id, (err) => {
    if (!err)
      res.json({ 'messagae': 'Success!' })
    else
      res.status(500).json(err)
  })
})

app.listen(8080, () => {
  console.log("Server is running!!");
});