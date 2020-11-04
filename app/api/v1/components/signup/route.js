const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.route('/signup')
  .post((req, res) => controller.post(req, res));

module.exports = router;