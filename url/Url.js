const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
    origUrl: String,
    _id: {
        type: String,
        'default': shortid.generate
    }
});

module.exports = mongoose.model('Url', urlSchema);