const express = require('express')
const db = require('./config/database')
const user = require('./routers/router')
const port = 8081

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(user)

app.listen(port, (err) => {
    db()
    if (!err) {
        console.log("Server started at http://localhost:" + port)
    }
})