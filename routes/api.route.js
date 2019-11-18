const route = require('express').Router();

const authorize = require('../middlewares/authorize');

const signupRoute = require('../user/routes/signup.route');
const loginRoute = require('../user/routes/login.route');
const contentRoute = require('../contents/routes/content.route');

const userRoute = require('../user/routes/user.route');

route.use('/signup', signupRoute);
route.use('/login', loginRoute);
route.use('/content', authorize, contentRoute);


route.use('/users', userRoute);

route.use(function (req, res, next) {
    res.json({
        msg : 'Hello from my API!'
    });
});


module.exports = route;