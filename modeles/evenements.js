const mongoose = require('mongoose');

const evenementsSchema = new mongoose.Schema({
  nomEvenement: {type: String},
  date: {type: Date},
  heure: {type: String},
  lieu: {type: String},
  description: {type: String},
  programme: {type: String},
  entreprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Entreprises' }, // Référence à la table des Entreprises
});

module.exports = mongoose.model('Evenements', evenementsSchema);
