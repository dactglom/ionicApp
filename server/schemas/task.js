var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var task = new Schema({
    taskName: 'String',
    taskDescription: 'String'
})

module.exports = mongoose.model('Task', task);