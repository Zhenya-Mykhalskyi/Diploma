const router = require("express").Router();

const { UserController } = require("../controllers");

router.post("/create", UserController.createUser);

module.exports = router;
