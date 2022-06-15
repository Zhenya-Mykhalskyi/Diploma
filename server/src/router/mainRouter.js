const router = require("express").Router();

const UserController = require("../controller/mainController");

router.post("/create", UserController.createUser);
router.post("/work", UserController.creteGraduateWork);
router.get("/works", UserController.getAllGraduationWornks);

module.exports = router;
