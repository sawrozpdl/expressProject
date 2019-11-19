const query = require("../../components/sql/query");

function insert(user) {
    return query(`INSERT into users values('${user.username}', '${user.email}', '${user.password}', NULL, NULL);`);
}

function update(username, updates) {
    let ups = '';
    for (let key in updates) 
        ups += `${key} = '${updates[key]}', `;
    return query(`UPDATE users SET ${ups.substring(0, ups.length - 2)} WHERE username = '${username}'`);
}

function select(selection, condition) {
    console.log('at select!');
    let conditions = 'WHERE ';
    for (let key in condition) 
        conditions += `${key} = '${condition[key]}' AND`;
    return query(`SELECT ${selection} from users ${conditions.substring(0, conditions.length - 4)}`);
}

function selectJoin(selection, condition, ...tables) {
    let joins = '';
    for (let i = 0; i < tables.length; i++) {
        let prevTable = (i == 0) ? 'users' : tables[i - 1].tableName;
        joins += `JOIN ${tables[i].tableName} ON ${prevTable}.${tables[i].condition} = ${tables[i].tableName}.${tables[i].condition} `;
    }
    let conditions = 'WHERE ';
    for (let key in condition) 
        conditions += `link.${key} = '${condition[key]}' AND`;
    return query(`SELECT ${selection} FROM users ${joins + conditions.substring(0, conditions.length - 4)}`);
}

selectJoin('content',{
    username : 'sawroz1'
}, {
    tableName : 'link',
    condition : 'username'
},{
    tableName : 'todos',
    condition : 'todo_id'
}).then(function(data) {
    console.log('Result : ', data);
}).catch(function(error) {
    console.log(error);
});

module.exports = {
    insert, update, select
}