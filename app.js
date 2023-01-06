const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

//db connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"));
mongoose.connection.on("error", (err) => {
  console.log(`DB connection error:`);
});

//routes import
const postRoutes = require("./routes/post");

//middleware
const myOwnMiddleware = (req, res, next) => {
  console.log("middleware applied");
  next();
};
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
