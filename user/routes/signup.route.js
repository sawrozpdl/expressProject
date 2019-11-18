const router = require('express').Router();
const control = require('../controllers/controller');

router.route('/')
  .get(function (req, res, next) {
    res.json({
      msg : 'Signup Form Goes Here??'
    });
  }) 
  .post(control.insert)
  
  
  router.route('/:value')
  .get(function (req, res, next) {
    res.json({
      msg : req.params.value
    });
  });

module.exports = router;