const express = require("express")

const db = require("../db")
const routes = require("../routes")

const {
  respondSuccess,
  respondFailure,
  logTime
} = require("./util")

const router = express.Router()

router.use(logTime)

router
  .route(routes.entry.base)
  .get(async (req, res) => {

    try {
      const entries = await db.getAllEntries()
      respondSuccess(res, entries)
    } catch (e) {
      respondFailure(res, e.message)
    }

  })
  .post(async (req, res) => {

    try {
      const entry = await db.createEntry(req.body.entry)
      respondSuccess(res, entry)
    } catch (e) {
      respondFailure(res, e.message)
    }

  })

router
  .route(routes.entry.slug)
  .get(async (req, res) => {

    try {
      const entry = await db.retrieveEntry(req.params.slug)
      respondSuccess(res, entry)
    } catch (e) {
      respondFailure(res, e.message)
    }

  })
  .patch(async (req, res) => {

    try {
      const entry = await db.updateEntry(req.params.slug, req.body.entry)
      respondSuccess(res, entry)
    } catch (e) {
      respondFailure(res, e.message)
    }

  })
  .delete(async (req, res) => {

    try {
      const entry = await db.deleteEntry(req.params.slug)
      respondSuccess(res, entry)
    } catch (e) {
      respondFailure(res, e.message)
    }

  })


module.exports = router
