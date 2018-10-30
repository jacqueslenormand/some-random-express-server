let express = require('express')
let app = express()

app.get('/', function(req, res) {
    res.send("<h2> this is express Version 2!</h2>")
})

app.listen(3030, function() {
    "I started!"
})