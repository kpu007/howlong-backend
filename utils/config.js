require ('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI
let TARGET_URI = process.env.TARGET_URI
let PORT = process.env.PORT
let SECRET = process.env.SECRET

module.exports = {
  MONGODB_URI,
  TARGET_URI,
  PORT,
  SECRET
}
