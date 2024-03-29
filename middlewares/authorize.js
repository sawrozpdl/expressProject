const jwt = require('jsonwebtoken');
const config = require('../config.json');

module.exports = function(req, res, next) {
    if (!req.headers.authorization) {
        return next({
            msg : 'Please login for the access',
            status : 401
        });
    }
    const receivedToken = req.headers.authorization.split(' ')[1];
    if (!receivedToken) {
        return next({
            msg : 'You have no access to this page!',
            status : 401
        });
    }
    jwt.verify(receivedToken, config.accessTokenSecret, function(error, decoded) {
        if (error) {
            next({
                msg : 'Invalid or Modified Token',
                error,
                status : 401
            })
        }
        else {
            req.username = decoded.data;
            req.userRole = decoded.role;
            next();
        }
    });
}