const userDao = require('../daos/user.dao');

function findAll() {
    return userDao.select('*');
}

function find(user) {
    return userDao.select('*', {
        username : user
    });
}

function add(user) {
    return userDao.insert(user);
}

function remove(username) {
    return userDao.update(username, {
        removedAt : Date.now()
    });
}

function put(username, user) {
    return userDao.update(username, {
        email : user.email,
        password : user.password,
        deletedAt : user.deletedAt
    });
}

function patch(username, updates) {
    return userDao.update(username, updates);
}

module.exports = {
    find,findAll, add, remove, put, patch
}