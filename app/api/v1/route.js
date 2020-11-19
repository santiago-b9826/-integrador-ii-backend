const { Router } = require('express');

const router = new Router();

/*
 * References to each resource routers
 */
const signup = require('./components/signup/route');
const login = require('./components/login/route');
const transaction = require('./components/transaction/route');

router.use('/auth/login', login);
router.use('/auth/signup', signup);
router.use('/transaction', transaction);

module.exports = router;
