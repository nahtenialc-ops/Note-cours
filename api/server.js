 const express = require("express");
const app = express();

let produits = [
  { id: 1, nom: "clair obscur", prix: 39.9 },
  { id: 2, nom: "Escape the backrooms", prix: 9.49 },
  { id: 3, nom: "Ecran", prix: 120 }
];

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});

// GET /produits -> renvoie tout le tableau
app.get("/produits", (req, res) => {
  res.json(produits);
});