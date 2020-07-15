const localTime = () => {
  const now = new Date()
  return now.toLocaleTimeString();
}

exports.respondSuccess = (res, payload) => {
  return res.status(200).json(payload)
}

exports.respondFailure = (res, error) => {
  console.error(error)
  return res.status(500).json(error)
}

exports.logTime = (req, res, next) => {
  console.log(`[${localTime()}] ${req.method}: ${req.path}`)
  next()
}
