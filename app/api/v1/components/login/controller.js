const util = require('./login');
const httpStatus = require('http-status');

const post = async (req, res) => {
  try {
    const ans = await util.login(req.body);

    return res
      .status(httpStatus.OK)
      .send({token:ans});
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

module.exports = {
  post
};