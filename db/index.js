const mongoose = require("mongoose")
const { Entry } = require("./models")

exports.makeConnection = (db_uri) => {

  const connection_options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }

  return mongoose.connect(db_uri, connection_options)

}

exports.getAllEntries = () => {
  return Entry.find({}).exec()
}

exports.createEntry = (entry_data) => {
  return Entry.create(entry_data)
}

exports.retrieveEntry = (slug) => {
  return Entry.findOne({ slug: slug }).exec()
}

exports.updateEntry = (slug, entry_data) => {
  return Entry.findOneAndUpdate(
    { slug: slug },
    { $set: entry_data },
    { new: true }
  ).exec()
}

exports.deleteEntry = (slug) => {
 return Entry.deleteOne({ slug: slug }).exec()
}
