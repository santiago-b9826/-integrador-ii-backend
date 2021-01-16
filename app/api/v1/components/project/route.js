const { Router } = require('express');
const { create, getAll, get, deleteById, update } = require('./controller');

const router = new Router();

router.route('/')
  .post((req, res) => create(req, res));

router.route('/')
  .get((req, res) => getAll(res));

router.route('/:id')
  .get((req, res) => get(req, res));

router.route('/:id')
  .delete((req, res) => deleteById(req, res));

router.route('/:id')
  .put((req, res) => update(req, res));


module.exports = router;