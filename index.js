

const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env?.PORT || 8000

require('express-async-errors')

const { dbConnection } = require("./src/configs/dbConnection")
dbConnection()

app.use(express.json())
app.use(require("./src/middlewares/findSearchSortPage"))
app.use(require("./src/middlewares/authentication.js"))
app.all("/",(req,res) => {
    res.send({
     error: false,
     message: "welcome to expense tracker API"
    })
})
app.use(require('./src/routes/'))
app.use(require('./src/middlewares/errorHandler.js'))
app.listen(PORT , () => console.log("http://127.0.0.1:" + PORT))