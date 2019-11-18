const router = require('express').Router();
const control = require('../controllers/controller');

function handleSignupSuccess(req, res, next) {
  res.json({
    msg : 'Account created, you can now log in!'
  });
}

router.route('/')
  .get(function (req, res, next) {
    res.json({
      msg : 'Signup Form Goes Here??'
    });
  }) 
  .post(control.addUser, handleSignupSuccess)

  router.route('/:value')
  .get(function (req, res, next) {
    res.json({
      msg : req.params.value
    });
  });

module.exports = router;