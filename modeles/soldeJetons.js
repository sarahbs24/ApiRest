const mongoose = require('mongoose');

const soldeJetonsSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateurs' }, // Référence à la table des Utilisateurs
  solde: {type: Number},
});

module.exports = mongoose.model('SoldeJetons', soldeJetonsSchema);
