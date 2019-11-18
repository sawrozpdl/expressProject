const router = require('express').Router();
const logIn = require('../services/user.login');


function sendToken (req, res, next) {
    res.json({
        msg : 'You are logged in!',
        token : req.body.token
    });
}

router.route('/')
.post(logIn, sendToken)
.get(function (req, res, next) {
    res.json({
        msg : 'Login Form Goes Here??'
    });
})

module.exports = router;