const { Users } = require("../database");
const { ERROR, HandleError } = require("../errors");

class UserController {
  async createUser(req, res, next) {
    try {
      console.log("TEST");
      console.log(req.body);
      console.log("TEST");
      const { name, email, phone } = req.body;

      if (!name) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid Name");
      }

      if (!email) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid Email");
      }

      if (!phone) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid Phone");
      }

      const user = await Users.create(req.body);

      res.status(ERROR.SUCCESS).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
