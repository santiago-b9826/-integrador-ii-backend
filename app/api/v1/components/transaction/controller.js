const util = require('./transaction');

const getAll = async (res) => {
  try {
    const ans = await util.getAll();

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const getByProjectId = async (req, res) => {
  try {
    const ans = await util.getByProjectId(req.query.projectId);

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const update = async (req, res) => {
  try {
    const ans = await util.update(req.body);

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const ans = await util.deleteById(req.params.id);

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const post = async (req, res) => {
  try {
    const ans = await util.create(req.body.id ,req.body);

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

module.exports = {
  post,
  update,
  getAll,
  getByProjectId,
  deleteById
};