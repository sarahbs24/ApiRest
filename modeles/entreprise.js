const mongoose = require('mongoose');

const entrepriseSchema = new mongoose.Schema({
  nomEntreprise: {
    type: String
  },
  produitsOuServices: {
    type:String
  },
  heuresOuverture: {type: String},
  emplacement: {type: String},
  mail: {type: String},
  motDePasse: {type: String},
  numero: {type: Number},
  mail: {type: String},
  utilisateurProprietaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }, // Référence à la table des Utilisateurs
});

module.exports = mongoose.model('Entreprise', entrepriseSchema);
