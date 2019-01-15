var express = require('express');
var mongoose = require('mongoose');
var initDB = require('../db/init');
var taskModel = require('../schemas/task');

var router = express.Router();

router.get('/tasks', (req, res) => {
    mongoose.connect(initDB.url, { useNewUrlParser: true });
    taskModel.find({}, (err, tasks) => {
        if(err) console.log(err);
        res.json({tasks: tasks});
    })
})

router.post('/tasks', (req, res) => {
    console.log(req.params);
    res.json({params: req.error});
})

module.exports = router;