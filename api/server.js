 const express = require("express");
const app = express();

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});