const mongoose = require('mongoose');

const echangeJetonsSchema = new mongoose.Schema({
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateurs' }, // Référence à la table des Utilisateurs
  objetsRecyclables:
  {
    type: Number
  },
  jetonsAttribues: {
 type: Number

  },
});

module.exports = mongoose.model('EchangeJetons', echangeJetonsSchema);
