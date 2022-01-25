var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

var port = PORT;

app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});

var adminRouter = express.Router();

adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!'); });

adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!'); });

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!'); });

app.use('/admin', adminRouter);

app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);
