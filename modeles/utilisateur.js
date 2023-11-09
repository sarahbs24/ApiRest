const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: {type: String},
  adresse: {type: String},
  mail: {type: String},
  motDePasse: {type: String},
  numero: {type: Number},
  preference: {type: String},
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
