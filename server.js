const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente en Vercel");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
