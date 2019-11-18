module.exports = function(error, req, res, next) {
    res.status(error.status || 400);
    res.json({
        msg : error.msg || 'Unknown error occured',
        status : error.status || 400
    });
}