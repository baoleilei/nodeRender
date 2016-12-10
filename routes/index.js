var express = require('express');
var router = express.Router();
var request = require('request');

var reqapi1 = function(){
    return new Promise(function(resolve, reject){
        request(
            { method: "get",
                uri: 'http://127.0.0.1:3000/json/',
                multipart: [
                    { 'content-type': 'application/json',
                    body: "body lalaa"}
                ]
            }, function (err, res, body) {
                if(err){
                    reject(err);
                }else{
                    //console.log(res.body);
                    resolve(res.body);
                }
            })
    })
}

var reqapi2 = function(){
    return new Promise(function(resolve, reject){
        request(
            { method: "get",
                uri: 'http://127.0.0.1:3000/json/1',
                multipart: [
                    { 'content-type': 'application/json',
                        body: "body lalaa"}
                ]
            }, function (err, res, body) {
                if(err){
                    reject(err);
                }else{
                    //console.log(res.body);
                    resolve(res.body);
                }
            })
    })
}

router.get('/', function(req, res, next) {

    setTimeout(function () {
        Promise.all([ reqapi1(), reqapi2()]).then(function(resp){
            console.log(resp);
            res.render('index.html');
        }).catch(function(e){

        })
    }, 3000)

});

module.exports = router;
