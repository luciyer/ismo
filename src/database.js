const mongoose = require("mongoose")
const Models = require("../models")

mongoose.connect(process.env.DB_URI || "mongodb://localhost/dev", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, () => console.log("Connected to database."))

exports.getAllEntries = (req, res) => {

  Models.Entry.find({}, (err, docs) => {
    if (!err) {
      console.log(docs.length)
      res.status(200).json(docs)
    } else {
      console.error(err)
      res.status(500).json(err)
    }
  })
  
}

exports.createEntry = (req, res) => {

  Models.Entry.create(req.body)
    .then(doc => {
      console.log(doc)
      res.status(200).json(doc)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json(err)
    })

}

exports.retrieveEntry = (req, res) => {

  Models.Entry.find({ slug: req.params.slug })
    .then(doc => {
      console.log(doc)
      res.status(200).json(doc)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json(err)
    })

}

exports.updateEntry = (req, res) => {

  Models.Entry.findOneAndUpdate({ slug: req.params.slug },
    { $set: req.body }, (err, doc) => {
      if (!err) {
        console.log(doc)
        res.status(200).json(doc)
      } else {
        console.error(err)
        res.status(500).json(err)
      }
    })

}

exports.deleteEntry = (req, res) => {

  Models.Entry.deleteOne({ slug: req.params.slug })
    .then(doc => {
      console.log(doc)
      res.status(200).json(doc)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json(err)
    })

}
