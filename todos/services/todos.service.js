const todosDao = require("../daos/todos.dao");

function findAll() {
  return todosDao.select("*");
}

function findActive() {
  return todosDao.select("*", {
    deletedAt: "NULL"
  });
}

function find(todoId) {
  return todosDao.select("*", {
    todo_id: todoId
  });
}

function getTodoBy(info, todo_id) {
  return todosDao.select(info, todo_id);
}

function add(todo) {
  return todosDao.insert(todo);
}

function remove(todo_id) {
  return todosDao.update(todo_id, {
    deletedAt: Date.now()
  });
}

function put(todo_id, todo) {
  return todosDao.update(todo_id, {
    content: todo
  });
}

module.exports = {
  find,
  findAll,
  getTodoBy,
  findActive,
  add,
  remove,
  put
};
