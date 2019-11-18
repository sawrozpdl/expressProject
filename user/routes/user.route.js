const router = require('express').Router();
const control = require('../controllers/controller');

router.route('/')
    .get()
    .post()

router.route('/:username')
    .get()
    .put()
    .patch()

export default router;