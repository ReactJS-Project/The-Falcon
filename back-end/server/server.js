var express = require('express');
var cors = require('cors')


var bodyParser = require('body-parser')
var app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var paths = require('./paths');
app.use("/", paths)
app.listen(3020)
