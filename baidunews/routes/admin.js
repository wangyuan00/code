var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'baidu'
    })
    /* 默认请求打开后台管理页面. */
router.get('/', function(req, res, next) {
    res.render('admin', {});
});


router.get('/getallnews', function(req, res) {
        var sql = 'SELECT * FROM `newslist`';
        connection.query(sql, function(err, rows, f) {
            if (!err) {
                res.send(rows);
            }
        })
    })
    /*获取*/
router.get('/allnews', function(req, res) {
    var sql = 'SELECT * FROM `newslist` WHERE newsId=' + req.query.id;
    connection.query(sql, function(err, rows, f) {
        console.log(sql);
        if (!err) {
            res.send(rows);
        }
    })
})

/*提交*/
router.post('/addnews', function(req, res) {
        // console.log(req.body.newsUrl);
        var sql = 'INSERT INTO `newslist`(`newsTitle`, `newsDate`, `newsContext`, `newsUrl`, `newsSrc`, `newsLabel`) VALUES (?,?,?,?,?,?)';

        connection.query(sql, [req.body.newsTitle, req.body.newsDate, req.body.newsContext, req.body.newsUrl, req.body.newsSrc, req.body.newsLabel], function(err, results, f) {
            if (err) {
                console.log(err);
            }

            // console.log(req.body);
            res.send({ success: "ok" });

        })
    })
    /*修改*/
router.post('/modifynews', function(req, res) {
    var sql = ' UPDATE `newslist` SET `newsTitle`=?,`newsDate`=?,`newsContext`=?,`newsUrl`=?,`newsSrc`=?,`newsLabel`=? WHERE newsId=?';

    connection.query(sql, [req.body.newsTitle, req.body.newsDate, req.body.newsContext, req.body.newsUrl, req.body.newsSrc, req.body.newsLabel, req.body.newsId], function(err, results, f) {
        if (err) {
            console.log(err);
        }
        res.send({ success: 'ok' });
    })
});
/*删除*/

router.post('/deletenews', function(req, res) {
    var sql = 'DELETE FROM `newslist` WHERE newsId=' + req.body.id;
    connection.query(sql, function(err, rows, f) {
        // 测试
        if (err) {
            console.log(err)

        } else {
            res.send('删除成功')
        }
    })
})


module.exports = router;
