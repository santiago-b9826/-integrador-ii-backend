const Transaction = require("../transaction/model");

const getAllTransactionsOnMaterialType = async (filters) => {
  console.log(filters);
  const { projectId, typeOfMaterial } = filters;
  return await Transaction.aggregate([
    { $match: { $and: [{ type: "Material" }, { projectId: projectId }] } },
    { $unwind: '$products' },
    { $match: { 'products.description': typeOfMaterial } }
  ])
}

const getAllMaterialTransactions = async (filters) => {
  const { projectId } = filters;
  return await Transaction.aggregate([
    { $match: { $and: [{ type: "Material" }, { projectId: projectId }] } }
  ])
}

module.exports = {
  getAllTransactionsOnMaterialType,
  getAllMaterialTransactions
}