//Initializing pakages
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

//config env file
dotenv.config();

//database connecting configuration
connectDb();

//rest objects
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

//initializing port
const PORT = 8080 || process.env.PORT;

//listening
app.listen(PORT, () => {
  console.log("Server is running");
});
