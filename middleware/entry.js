const db = require("../db")
const { respondSuccess, respondFailure} = require("./util")

const get = async (req, res) => {
  try {
    respondSuccess(res, await db.getAllEntries())
  } catch (e) {
    respondFailure(res, e.message)
  }
}

const post = async (req, res) => {

  try {
    respondSuccess(res, await db.createEntry(req.body))
  } catch (e) {
    respondFailure(res, e.message)
  }

}

const slug_get = async (req, res) => {

  try {
    respondSuccess(res, await db.retrieveEntry(req.params.slug))
  } catch (e) {
    respondFailure(res, e.message)
  }

}

const slug_patch = async (req, res) => {

  try {
    respondSuccess(res, await db.updateEntry(req.params.slug, req.body))
  } catch (e) {
    respondFailure(res, e.message)
  }

}


const slug_delete = async (req, res) => {

  try {
    respondSuccess(res, await db.deleteEntry(req.params.slug))
  } catch (e) {
    respondFailure(res, e.message)
  }

}


module.exports = {
  get,
  post,
  slug: {
    get: slug_get,
    patch: slug_patch,
    delete: slug_delete
  }
}
