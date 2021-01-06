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
    // admin: [User],
    // audit: [User]
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
  const Project = new Project({
    name: body.name,
    description: body.description,
    state: body.state,
    city: body.city,
    neighborhood: body.neighborhood,
    address: body.address,
    // owner: User,
    // admin: [User],
    // audit: [User]
  });
  return Project.findByIdAndUpdate(id, Project, { new: true }).exec();
}

const deleteById = async (id) => {
  return await Project.findByIdAndRemove(id).exec();
}

module.exports = {
  create,
  getAll,
  get,
  deleteById,
  update
}