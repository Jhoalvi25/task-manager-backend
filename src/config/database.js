require("dotenv").config();
const mongoose = require("mongoose");
const {MONGO_URI} = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${MONGO_URI}`
    );
    console.log("Conexión a MongoDB exitosa");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
