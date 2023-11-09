const mongoose = require('mongoose');

const commentairesForumSchema = new mongoose.Schema({
  commentaire: 
  {
    type: String
  },
  datePublication: {
     type: Date
  },
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }, // Référence à la table des Utilisateurs
  postForum: { type: mongoose.Schema.Types.ObjectId, ref: 'PostsForum' }, // Référence à la table des Posts du Forum
});

module.exports = mongoose.model('CommentaireForum', commentairesForumSchema);
