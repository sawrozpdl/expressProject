const todosDao = require("../daos/todos.dao");

function findAll() {
    console.log('todo finding');
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

function idFor(content) {
  return todosDao.select('todo_id', {
    content : content
  });
}

function registerTodoFor(username, todo_id) {
  return todosDao.insertLink(username, todo_id);
}

function getTodoBy(info, todo_id) {
  return todosDao.select(info, todo_id);
}

function getTodosFor(user) {
  console.log('get todos for');
  return todosDao.selectJoin('content',{
      users_username : user
  }, {
      tableName : 'link',
      condition : 'todo_id'
  },{
      tableName : 'users',
      condition : 'username'
  });
}

function add(todo, tags) {
  return todosDao.insert(todo, tags);
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

function patch(todo_id, updates) {
    return todosDao.update(todo_id, updates)
}

module.exports = {
  find,
  findAll,
  idFor,
  getTodoBy,
  getTodosFor,
  registerTodoFor,
  findActive,
  add,
  remove,
  put,
  patch
};
