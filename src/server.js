import express from "express";
import { connect } from "mongoose";
import morgan from "morgan";
import { userRouter } from "./routes/user.routes.js";

const app = express();
const DB_URL = "mongodb+srv://facuquaglia:jy3Pc9LraPrrQBYT@cluster0.ojlum.mongodb.net/<dbname>?retryWrites=true&w=majority"; 
const PORT = 5000;

// Configuración de Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Conexión a la base de datos
connect(DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

// Rutas
app.use("/api/users", userRouter);

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});