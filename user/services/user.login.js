const query = require("../../components/sql/query");
const jwt = require("jsonwebtoken");
const userService = require('./user.service');

module.exports = function(req, res, next) {
  userService.find(req.body.username)
    .then(function(result) {
      if (result.length == 0)
        next({
          msg: "No user"
        });
      if (req.body.password === result[0].password) {
        const token = jwt.sign(
          {
            data: req.body.username
          },
          global.config.encrypt,
          {
            expiresIn : '1m'
          } 
        );
        console.log(token);
        req.body.token = token;
        next();
      } else
        next({
          msg: "Wrong Password"
        });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
};
