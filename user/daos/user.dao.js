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
    let ups = 'WHERE ';
    for (let key in condition) 
        ups += `${key} = '${condition[key]}' AND`;

    console.log(`SELECT ${selection} from users ${ups.substring(0, ups.length - 4)}`);
    return query(`SELECT ${selection} from users ${ups.substring(0, ups.length - 4)}`);
}

module.exports = {
    insert, update, select
}