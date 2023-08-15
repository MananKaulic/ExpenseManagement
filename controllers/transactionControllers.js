const transactionModel = require("./../models/transactionModels");

const get_transactionController = async (req, res) => {
  try {
    const { userId } = req.body;
    const transaction = await transactionModel.find({ userId: userId });
    res.status(200).json({
      success: true,
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const add_transactionController = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);

    await newTransaction.save();

    res.status(201).json({
      success: true,
      newTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { get_transactionController, add_transactionController };
