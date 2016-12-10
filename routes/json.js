var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
 });*/
router.get('/', function(req, res, next) {
    var data = {
        user1: 'hi',
        user2: 'hello'
    }
    res.send(data)

});
router.get('/1', function(req, res, next) {
    var data = {
        user1: 'hi1',
        user2: 'hello1'
    }
    //setTimeout(function(){
    res.send(data)
    //},5000)
});
router.get('/2', function(req, res, next) {
    var data = {
        user1: 'hi2',
        user2: 'hello2'
    }
    //setTimeout(function(){
    res.send(data)
    //},5000)
});
module.exports = router;
