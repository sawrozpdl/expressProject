const query = require('../../components/sql/query');

function insert(todo) {
    return query(`INSERT into todos values(NULL , '${todo}', NULL);`);
}

function update(todo_id, updates) {
    let ups = '';
    for (let key in updates) 
        ups += `${key} = '${updates[key]}', `;
    return query(`UPDATE todos SET ${ups.substring(0, ups.length - 2)} WHERE todo_id = '${todo_id}'`);
}

function select(selection, condition) {
    let ups = 'WHERE ';
    for (let key in condition) 
        ups += `${key} = '${condition[key]}' AND`;
    return query(`SELECT ${selection} from todos ${ups.substring(0, ups.length - 4)}`);
}

module.exports = {
    insert, update, select
}