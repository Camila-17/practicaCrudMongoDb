
const path = require("path");
const express = require("express");

const morgan = require("morgan");

const mongoose = require("mongoose");

const app = express();

app.use(express.static('public'));

mongoose
  .connect("mongodb://127.0.0.1:27017/dbUsuario")
  .then((db) => console.log("Database MongoDB - dbUsuario connected"))
  .catch((err) => console.log(err));

const indexRut = require("./routes/index");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded());
app.use("/", indexRut); //ERROR EN LINEA 24

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
// console.log('Hola mundo')
