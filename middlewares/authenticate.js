module.exports = function(req, res, next) {
    if (req.body)
        next();
    else next({
        msg : 'no user'
    });
}