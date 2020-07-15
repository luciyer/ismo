const express = require("express")

const db = require("../db")
const routes = require("../routes")

const { logTime } = require("./util")
const entry = require("./entry")

const router = express.Router()

router.use(logTime)

router
  .route(routes.entry.base)
    .get(entry.get)
    .post(entry.post)

router
  .route(routes.entry.slug)
    .get(entry.slug.get)
    .patch(entry.slug.patch)
    .delete(entry.slug.delete)

module.exports = router
