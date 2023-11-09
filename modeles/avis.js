const mongoose = require('mongoose');

const avisUtilisateursSchema = new mongoose.Schema({
  commentaire:
   {
    type: String,
  },
  note: {
    type: Number,
  },
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }, // Référence à la table des Utilisateurs
  entreprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise' }, // Référence à la table des Entreprises
});

module.exports = mongoose.model('AvisUtilisateurs', avisUtilisateursSchema);
