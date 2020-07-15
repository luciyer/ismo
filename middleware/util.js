const currentTime = () => {
  const today = new Date()
  return today.getHours() + ":" +
         today.getMinutes() + ":" +
         today.getSeconds();
}

exports.respondSuccess = (res, payload) => {
  return res.status(200).json(payload)
}

exports.respondFailure = (res, error) => {
  console.error(error)
  return res.status(500).json(error)
}

exports.logTime = (req, res, next) => {
  console.log(`[${currentTime()}] ${req.method}: ${req.path}`)
  next()
}
