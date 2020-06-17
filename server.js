const express = require("express")
const bp = require("body-parser")

const routes = require("./routes")
const ismo = require("./src")
const db = ismo.database

const app = express()

app.use(bp.json())
app.listen(process.env.PORT || 8080, ismo.logStartup)

app.get(routes.entry.base, db.getAllEntries)

app.post(routes.entry.base, db.createEntry)
app.get(routes.entry.slug, db.retrieveEntry)
app.patch(routes.entry.slug, db.updateEntry)
app.delete(routes.entry.slug, db.deleteEntry)
