const mongoose = require('mongoose');

const articlesEducSchema = new mongoose.Schema({
   titre: {
    type: String,
    
  },
  contenu: {
    type: String,
    
  },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }, // Référence à la table des Catégories
});

module.exports = mongoose.model('ArticlesEdu', articlesEducSchema);
