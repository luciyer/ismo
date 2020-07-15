const mongoose = require("mongoose")
const slug = require("mongoose-slug-updater")

mongoose.plugin(slug)

const entry_schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: "title",
    unique: true
  },
  definition: {
    type: String,
    required: true
  },
  part_speech: {
    type: String,
    required: true
  },
  phonetic: String,
  language: {
    type: String,
    default: "Spanish"
  },
  example: String,
  country: {
    type: String,
    default: "Argentina"
  },
  created: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: true
  }
})


module.exports = mongoose.model('Entry', entry_schema)
