const express = require('express');
const server = express();
const route = require('./routes/api.route');
global.config = require('./config.json');

const PORT = global.config.port;


server.use(express.urlencoded({
    extended:true
}));

server.use(express.json());

server.use('/api', route);

server.use(function(req, res, next) {
    next({
        msg : 'Not found',
        status : 404
    });
});

server.use(function(error, req, res, next) {
    res.status(error.status || 400);
    res.json({
        msg : error.msg || 'Unknown error occured',
        status : error.status || 400
    });
});

server.listen(PORT, function(error, success) {
    if (!error)
        console.log(`Server listening at port ${PORT}`);
});
