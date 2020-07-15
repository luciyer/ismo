require("dotenv").config()

const express = require("express")
const bp = require("body-parser")

const db = require("./db")
const entryMiddleware = require("./middleware")

const db_uri = process.env.DB_URI || "mongodb://localhost/dev"

const app = express()

app
  .use(bp.json())
  .use(entryMiddleware)
  .listen(process.env.PORT || 8080, async () => {
    await db.makeConnection(db_uri)
  })
