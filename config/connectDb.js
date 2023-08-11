const mongoose = require("mongoose");

const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(colors.bgCyan("mongo server is runnig"));
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
