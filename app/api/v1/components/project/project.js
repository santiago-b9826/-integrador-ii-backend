const Project = require("./model");

const create = async (body) => {
  const project = new Project({
    name: body.name,
    description: body.description,
    state: body.state,
    city: body.city,
    neighborhood: body.neighborhood,
    address: body.address,
    // owner: User,
    // admin: [User]
  });

  return await project.save();
}

const getAll = () => {
  return Project.find()
    .sort({ creationDate: -1 })
    .lean()
    .exec();
}

const get = (projectId) => {
  return Project.find({ projectId: projectId })
    .lean()
    .exec();
}

const update = (id, body) => {
  const project = {
    name: body.name,
    description: body.description,
    state: body.state,
    city: body.city,
    neighborhood: body.neighborhood,
    address: body.address,
    // owner: User,
    // admin: [User]
  };

  return Project.findByIdAndUpdate(
    { _id: id },
    deleteEmptyFields(project),
    { new: true })
    .exec();
}

const deleteById = async (id) => {
  return await Project.findByIdAndRemove(id).exec();
}

const deleteEmptyFields = (object) => {
  Object.keys(object).forEach(field => {
    if (object[field] === null || object[field] === undefined) {
      delete object[field]
    }
  });
  return object;
}

module.exports = {
  create,
  getAll,
  get,
  deleteById,
  update
}