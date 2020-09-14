const express = require("express");
const router = express.Router();
const {
  addNumber,
  subNumber,
  multiplyNumber,
  divisionNumber,
} = require("./apiController");

const { dataType } = require("./checkDataTypes");

router.post("/add", dataType, addNumber);
router.post("/sub", dataType, subNumber);
router.post("/multiply", dataType, multiplyNumber);
router.post("/divide", dataType, divisionNumber);

module.exports = router;