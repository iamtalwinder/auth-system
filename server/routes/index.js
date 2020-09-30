const express = require("express");
const con = require("../config/db");
const userController = require("../controller/user");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.get(
  "/test",
  (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send({ msg: "Unauthorized" });
    }
    next();
  },
  (req, res) => {
    res.status(200).send("Protected route");
  }
);

module.exports = router;
