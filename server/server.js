const express = require("express")
const app = express()

//API
app.get("/home", (req, res) =>  {
    res.json({ "users": ["Rober", "Jony", "Alex", " El pepe"] })
})

app.listen(5000, () => { console.log("Server listenning on port 5000") })