const express = require("express");
const app = express();

const produits = [
  { id: 1, nom: "Clair obscur Expedition 33", prix: 39.90 },
  { id: 2, nom: "Escape the Backrooms", prix: 9.49 },
  { id: 3, nom: "Project Zomboid", prix: 25.49 }
];

// Une route = une methode + un chemin + une fonction de reponse
app.get("/", (req, res) => {
  res.json({ message: "Bonjour" }); // Express pose l en-tete ET convertit en JSON
});

app.get("/produits", (req, res) => {
    res.json(produits)
});

app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
// Une route = une methode + un chemin + une fonction de reponse
app.get("/", (req, res) => {
  res.json({ message: "Bonjour" }); // Express pose l en-tete ET convertit en JSON
});

app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});


// GET /produits/2 -> renvoie le produit dont l id vaut 2
app.get("/produits/:id", (req, res) => {
  const id = Number(req.params.id);          // :id est recupere dans req.params
  const produit = produits.find((p) => p.id === id);
  if (!produit) {
    return res.status(404).json({ erreur: "Produit introuvable" });
  }
  res.json(produit);
});


// Necessaire pour lire le corps JSON envoye par le client
app.use(express.json());


// POST /produits -> ajoute un produit recu dans le corps de la requete
app.post("/produits", (req, res) => {
  // On ne fait JAMAIS confiance au client : on verifie les donnees
  if (!req.body.nom) {
    return res.status(400).json({ erreur: "Le nom est obligatoire" });
  }
  const nouveau = { id: produits.length + 1, nom: req.body.nom, prix: req.body.prix };
  produits.push(nouveau);
  res.status(201).json(nouveau); // 201 = cree
});



// DELETE /produits/2 -> supprime le produit n 2
app.delete("/produits/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = produits.findIndex((p) => p.id === id);
  if (index === -1) {                           // -1 = pas trouve
    return res.status(404).json({ erreur: "Produit introuvable" });
  }
  produits.splice(index, 1);                    // retire 1 element a cette position
  res.status(200).json({ message: "Produit supprime" });
});