var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');



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

    
app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });
