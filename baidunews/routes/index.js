var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baidu'
})


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getallnews', function(req, res) {
    // console.log(req.query.label);
    // var sql = 'select * from `newslist` where `newsLabel`=' + req.query.label + '';
    // console.log(sql);
    pool.getConnection(function(err, con) {
        console.log(req.query.label);
        var sql = 'select * from `newslist` where `newsLabel`= ?';
        // var sql = 'select * from `newslist` where `newsLabel`=' + req.query.label + '';
        con.query(sql, req.query.label, function(err, result, f) {
            if (!err) {
                console.log(result);
            } else {
                console.log(err);
            }
        })
        con.release();

    })

})

router.get('/newsed', function(req, res) {
    pool.getConnection(function(err, con) {
        // console.log(req.query.label);
        var sql = 'select * from `newslist` where `newsLabel`= 0';
        // var sql = 'select * from `newslist` where `newsLabel`=' + req.query.label + '';
        con.query(sql, function(err, result, f) {
            if (!err) {
                // console.log(result);
                res.send(result);
            } else {
                console.log(err);
            }
        })
        con.release();

    })


})

router.get('/getNews/:nid', function(req, res) {
    var bl = req.params.nid; //固定参数用query 不固定参数用parmas

    pool.getConnection(function(err, con) {
        // console.log(req.query.label);
        var sql = 'select * from `newslist` where `newsLabel`= ' + bl;
        // var sql = 'select * from `newslist` where `newsLabel`=' + req.query.label + '';
        con.query(sql, function(err, result, f) {
            if (!err) {
                // console.log(result);
                res.send(result);
            } else {
                console.log(err);
            }
        })
        con.release();

    })


})

module.exports = router;


