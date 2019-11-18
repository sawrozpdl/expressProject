const router = require('express').Router();

router.route('/')
.post(function (req, res, next) {
    res.json({
        msg : 'You are logged in!',
        token : req.body.token
    });
})
.get(function (req, res, next) {
    res.json({
        msg : 'Login Form Goes Here??'
    });
})

module.exports = router;