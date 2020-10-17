require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(" Đã ket noi mongosee!");
});

var userRoute = require('./routes/user.route');

var port = process.env.PORT || 3000;

var app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));


app.get('/', function(req, res) {
    res.render('index', {
      name: 'AAA'
    });
  });

app.use('/users', userRoute);
    
app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });
