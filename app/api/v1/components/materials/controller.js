const httpStatus = require('http-status');
const util = require('./material');

const getByTypeOfMaterial = async (req, res) => {
  try {
    const filters = { typeOfMaterial: req.params.typeOfMaterial, projectId: req.query.projectId };
    const ans = await util.getAllTransactionsOnMaterialType(filters);

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

const getAllMaterialTransactions = async (req, res) => {
  try {
    const ans = await util.getAllMaterialTransactions(req.query);

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

module.exports = {
  getByTypeOfMaterial,
  getAllMaterialTransactions,
};