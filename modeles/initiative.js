const mongoose = require('mongoose');

const initiativesSchema = new mongoose.Schema({
  categorie: {
    type: String,
    unique: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  entreprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise' },
});

module.exports = mongoose.model('Initiatives', initiativesSchema);
