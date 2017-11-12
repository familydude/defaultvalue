var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
const MongoClient = require('mongodb').MongoClient
app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.post('/getlist', function (req, res, next) {
  try {
    var mylist = JSON.stringify(["apan","bananen","grodan"])
    res.send(mylist)
    console.log("getlist recieved")
  } catch (e) {
    console.log("bad list")
    next(e)
  }
})
MongoClient.connect('mongodb://apan:bananen@ds231315.mlab.com:31315/defaultvalue', (err, database) => {
  db = database;
  if (err) return console.log(err)
  app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
  })
  // ... do something here
})