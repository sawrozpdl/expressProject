const query = require("../../components/sql/query");

function insert(req, res, next) {
  console.log(req.body);
  query(
    `INSERT into users values('${req.body.username}', '${req.body.email}', '${req.body.password}', 1);`
  )
    .then(function(result) {
      res.json({
        msg: "Account Created, you can now login"
      });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
}

function remove(req, res, next) {}

function update(req, res, next) {}

function search(req, res, next) {}

module.exports = {
  insert,
  remove,
  update,
  search
};
