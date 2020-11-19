const Transaction = require("./model");

const create = async (body) => {
  const transaction = new Transaction({
    id: body.id,
    projectId: body.projectId,
    creationDate: body.creationDate,
    description: body.description,
    income: body.income,
    type: body.type,
    value: body.value,
    walletId: body.walletId,
    products: body.products
  });
  return await transaction.save();
}

const getAll = async () => {
  return await Transaction.find()
  .sort({ creationDate: -1 })
}

const getByProjectId = async (projectId) => {
   return await Transaction.find({
    projectId: projectId
  }).exec();
}

const update = async (id, body) => {
  const transaction = new Transaction({
    projectId: body.projectId,
    creationDate: body.creationDate,
    description: body.description,
    income: body.income,
    type: body.type,
    value: body.value,
    walletId: body.walletId,
    products: body.products
  });
  return await Transaction.findByIdAndUpdate(id, transaction, {new:true}).exec();
}

const deleteById = async (id) => {
  return await Transaction.findByIdAndRemove(id).exec();
}

module.exports = {
  create,
  getAll,
  getByProjectId,
  deleteById,
  update
}