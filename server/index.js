require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello server")
})

const POST = process.env.POST | 5000

app.listen(POST, () => {
  console.log("server listen on post:", POST)
})
