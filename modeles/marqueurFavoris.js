const mongoose = require('mongoose');

const marqueursFavorisSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }, // Référence à la table des Utilisateurs
  initiative: { type: mongoose.Schema.Types.ObjectId, ref: 'Initiatives' }, // Référence à la table des Initiatives
});

module.exports = mongoose.model('MarqueursFavori', marqueursFavorisSchema);
