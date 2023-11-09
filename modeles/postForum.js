const mongoose = require('mongoose');

const postsForumSchema = new mongoose.Schema({
  titre: {type: String},
  contenu: {type: String},
  
  datePublication: {type: Date},
  like: {type: String},
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }, // Référence à la table des Utilisateurs
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie' }, // Référence à la table des Catégories (si utilisée)
});

module.exports = mongoose.model('PostForum', postsForumSchema);
