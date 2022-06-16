const { Users, GraduateWork } = require("../database");
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

  async creteGraduateWork(req, res, next) {
    try {
      console.log("TEST");
      console.log(req.body);
      console.log("TEST");

      const { name, year, theme, leader } = req.body;

      const allowedYear = Number(new Date().getFullYear());

      if (!name) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid name");
      }

      if (!theme) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid theme");
      }

      if (
        !year ||
        Number(year) < 2010 ||
        Number(year) > allowedYear ||
        !Number(year)
      ) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid year");
      }

      if (!leader) {
        throw new HandleError(ERROR.BAD_REQUEST, "Invalid leader");
      }

      const work = await GraduateWork.create(req.body);

      res.status(ERROR.SUCCESS).json(work);
    } catch (e) {
      next(e);
    }
  }

  async getAllGraduationWornks(req, res, next) {
    try {
      const works = await GraduateWork.findAndCountAll();
      res.status(ERROR.SUCCESS).json(works);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
