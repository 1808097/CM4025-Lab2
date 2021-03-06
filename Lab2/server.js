var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

var port = PORT;

app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});

app.route('/login')
.get(function(req, res) {
res.send('this is the login form');
})
.post(function(req, res) { console.log('processing');
res.send('processing the login form!');
});


var adminRouter = express.Router();

adminRouter.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!'); });

adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!'); });

adminRouter.param('name', function(req, res, next, name) {
    console.log('doing name validations on ' + name);
    req.name = name;
    next();
    });

adminRouter.get('/users/:name', function(req, res) {
 res.send('hello ' + req.name + '!'); });

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!'); });

app.use('/admin', adminRouter);

app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);
