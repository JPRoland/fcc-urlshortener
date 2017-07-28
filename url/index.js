const mongoose = require('mongoose');
const Url = mongoose.model('Url');
const validator = require('validator');

exports.createUrl = async (req, res) => {
    const reqUrl = req.params.url;
    // Validate URL
    if(!validator.isURL(reqUrl)) {
        return res.json({ error: 'Invalid URL' });
    }

    const url = await (new Url({origUrl: reqUrl})).save();
    res.json({ "original url": url.origUrl, "short_url": `${req.hostname}/api/${url._id}`});
};

exports.getUrl = async (req, res) => {
    const url = await Url.findById(req.params.id);
    res.redirect(url.origUrl);
};