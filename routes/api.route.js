const route = require('express').Router();

const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');
const protect = require('../middlewares/protect');

const signupRoute = require('../user/routes/signup.route');
const loginRoute = require('../user/routes/login.route');
const contentRoute = require('../contents/routes/content.route');

const userRoute = require('../user/routes/user.route');

route.use('/signup', signupRoute);
route.use('/login', authenticate, authorize, loginRoute);
route.use('/content', protect, contentRoute);


route.use('/users', userRoute);


module.exports = route;