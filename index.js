var express = require('express');




var port = process.env.PORT || 3000;

var app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
      name: 'AAA'
    });
  });

    
app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });
