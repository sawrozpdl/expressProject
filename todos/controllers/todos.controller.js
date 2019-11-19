userService = require("../services/todos.service");

function getAllTodos(req, res, next) {
  userService
    .findAll()
    .then(function(result) {
      res.json({
        status: "Success",
        data: result
      });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
}

function addTodo(req, res, next) {
  userService
    .add(req.body.content)
    .then(function(result) {
      res.json({
        status: "success",
        msg: "Todo Added"
      });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
}

function removeTodo(req, res, next) {
  userService
    .remove(req.params.todo_id)
    .then(function(result) {
      res.json({
        status: "success",
        msg: "Todo Removed!"
      });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
}

function putTodo(req, res, next) {
  userService
    .put(req.params.todo_id, req.body.content)
    .then(function(result) {
      res.json({
        status: "success",
        msg: "Todo Updated"
      });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
}

function getTodo(req, res, next) {
  userService
    .find(req.params.todo_id)
    .then(function(result) {
      console.log("result : ", result[0]);
      if (result[0]) {
        res.json({
          status: "success",
          todo: result[0]
        });
      } else
        next({
          msg : `No todo found with id : ${req.params.todo_id}`
        });
    })
    .catch(function(error) {
      next({
        msg: error
      });
    });
}

module.exports = {
  getAllTodos,
  addTodo,
  removeTodo,
  putTodo,
  getTodo
};
