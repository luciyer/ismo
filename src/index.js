const logStartup = () => {
  console.log("Server started.")
}

module.exports = {
  logStartup: logStartup,
  database: require("./database")
}
