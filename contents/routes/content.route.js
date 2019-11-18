const router = require('express').Router();


router.route('/')
    .get(function (req, res, next) {
        res.json({
            userData : req.userData,
            msg : 'Protected content goes here?'
        });
    });

module.exports = router;