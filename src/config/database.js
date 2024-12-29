require("dotenv").config();
const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@taskweb.1ygsf.mongodb.net/`
    );
    console.log("Conexión a MongoDB exitosa");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
