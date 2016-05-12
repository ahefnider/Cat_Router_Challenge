// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var cats = require('./routes/catmodule');

app.set('port', 5000);

app.use(bodyParser.urlencoded({extended: true}));



//ROUTES
app.use('/felines', cats);
app.use('/', index);








app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
