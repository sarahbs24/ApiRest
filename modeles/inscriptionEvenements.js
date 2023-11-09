const mongoose = require('mongoose');

const inscriptionsEvenementsSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateurs' }, // Référence à la table des Utilisateurs
  evenement: { type: mongoose.Schema.Types.ObjectId, ref: 'Evenements' }, // Référence à la table des Événements
});

module.exports = mongoose.model('InscriptionsEvenements', inscriptionsEvenementsSchema);
