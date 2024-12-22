const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from ECS!");
});

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Datos recibidos:", data);
  res.status(201).send("Datos recibidos correctamente");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
