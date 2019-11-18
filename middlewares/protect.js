const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const receivedToken = req.headers.authorization.split(' ')[1];
    if (!receivedToken) {
        return next({
            msg : 'You have no access to this page!',
            status : 401
        });
    }

    jwt.verify(receivedToken, config.encrypt, function(error, decoded) {
        if (error) {
            next({
                msg : 'Token Expired or Modified',
                error,
                status : 401
            })
        }
        else {
            console.log('Decoded => ', decoded);
            req.userData = decoded;
            next();
        }
    });
}