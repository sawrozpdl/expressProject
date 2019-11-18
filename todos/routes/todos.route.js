const router = require('express').Router();


router.route('/')
    .get(function (req, res, next) {
        res.json({
            user : req.username,
            protectedContent : 'TODOS!'
        });
    });

module.exports = router;