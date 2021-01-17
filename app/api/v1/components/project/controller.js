const httpStatus = require('http-status');
const util = require('./project');

const create = async (req, res) => {
  try {
    const { body } = req;
    
    if (!body) {
      return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: 'Bad Request' });
    }

    body.username = req.userdata.username;

    const ans = await util.create(body);

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
      .send({ message: 'Internal server error' });
  }
};

const get = async (req, res) => {
  try {

    const { id } = req.params;

    const ans = await util.get(id);

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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const ans = await util.update(id, body);

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
      .send({ message: 'Internal server error' });
  }
};

module.exports = {
  create,
  update,
  getAll,
  get,
  deleteById
};