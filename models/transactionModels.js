const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    type: {
      type: String,
      required: [true, "Selection of spend or income is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    reference: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = new mongoose.model("transaction", transactionSchema);
module.exports = transactionModel;
module.exports;
