const mongoose = require("mongoose");

const colors = require("colors");

const connectDb = async () => {
  try {
    console.log("trying to connect");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
    console.log(colors.bgCyan("mongo server is runnig"));
  } catch (error) {
    console.log("error occured");
    console.log(error);
  }
};
module.exports = connectDb;
