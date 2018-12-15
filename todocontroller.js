var express = require('express');
var db = require('./db.js');

var router = express.Router();
/*Getting Todo*/
router.get("/getdata", function (req, res) {
    var sql = "select * from todolist";
    db.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            res.jsonp({
                success: false,

            });
        } else {
            console.log('done');
            console.log(result);
            res.jsonp({
                success: true,
                data: result
            });
        }
    })


})

/*Posting new Todo*/
router.post('/add', function (req, res) {
    var data = req.body;
    console.log(data);
    var sql = "insert into todolist(todo_name, status) values('" + data.todo_name + "','" + data.status + "')";
    db.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            res.jsonp({
                success: false,

            });
        } else {
            console.log('done');
            res.jsonp({
                success: true,
                message: "done"
            });
        }
    })

})

router.post('/changeStatus', function (req, res) {
    var data = req.body;
    console.log(data);
    var sql = "update todolist set status=" + data.status + " where id=" + data.id;
    db.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            res.jsonp({
                success: false,
                message: error
            })
        } else {
            res.jsonp({
                success: true,
                message: "Status updated"
            })
        }

    })
})

router.post('/updateTodo', function (req, res) {
    var data = req.body;
    console.log(data);
    var sql = "update todolist set todo_name='" + data.newTodo + "' where id=" + data.id;
    db.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            res.jsonp({
                success: false,
                message: error
            })
        } else {
            res.jsonp({
                success: true,
                message: "Update Successful"
            })
        }
    })
})

router.post('/delete/:id', function (req, res) {
    var data = req.body;
    var sql = "delete from todolist where id=" + data.id;
    db.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            res.jsonp({
                success: false,
                message: error
            })
        } else {
            console.log(result);
            res.jsonp({
                success: true,
                message: "Todo " + data.id + " deleted",
            })
        }

    })
})

module.exports = router;
