const express = require("express");
const {
  get_transactionController,
  add_transactionController,
} = require("../controllers/transactionControllers");

const router = express.Router();

//routes
router.post("/addTransaction", add_transactionController);
router.post("/getTransaction", get_transactionController);

module.exports = router;
