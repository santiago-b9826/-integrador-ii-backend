const { fileURLToPath } = require("url");
const Transaction = require("./model");

const getMaterials = async (filters) => {
  { projectId, typeOfMaterial } = filters;
  return await Transaction.aggregate(
    { $match : {type:"Material"}},
    { $unwind: '$products'},
    { $match: {'products.description': typeOfMaterial}}
  )
}

module.exports = {
  get,
}