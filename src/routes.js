const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("./controllers/UserController");

router.get("/", userController.listUsers);
router.post(
  "/",
  [
    // checando se o email é válido
    check("email")
      .isEmail()
      .withMessage("E-mail inválido")
  ],
  userController.createUser
);
router.put(
  "/:id",
  [
    // checando se o email é válido
    check("email")
      .isEmail()
      .withMessage("E-mail inválido")
  ],
  userController.updateUser
);
router.delete("/:id", userController.deleteUser);

module.exports = router;
