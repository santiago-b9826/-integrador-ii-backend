const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.route('/:typeOfMaterial')
  .get((req,res) => controller.getByTypeOfMaterial(req, res));

router.route('')
  .get((req, res) => controller.getAllMaterialTransactions(req, res));


module.exports = router;