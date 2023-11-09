const CommentairesForum = require('../modeles/commentaireForum');

// Créer un nouveau commentaire du forum
const creerCommentaireForum = (req, res) => {
  const nouveauCommentaireForum = new CommentairesForum(req.body);
  nouveauCommentaireForum
    .save()
    .then((commentaire) => {
      res.json(commentaire);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la création du commentaire du forum');
    });
};

// Obtenir tous les commentaires du forum
const obtenirCommentairesForum = (req, res) => {
  CommentairesForum.find({})
    .then((commentaires) => {
      res.json(commentaires);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des commentaires du forum');
    });
};

// Obtenir un commentaire du forum par ID
const obtenirCommentaireForumParID = (req, res) => {
  CommentairesForum.findById(req.params.id)
    .then((commentaire) => {
      if (!commentaire) {
        return res.status(404).send('Commentaire du forum non trouvé');
      }
      res.json(commentaire);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération du commentaire du forum');
    });
};

// Mettre à jour un commentaire du forum par ID
const mettreAJourCommentaireForum = (req, res) => {
  CommentairesForum.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((commentaire) => {
      if (!commentaire) {
        return res.status(404).send('Commentaire du forum non trouvé');
      }
      res.json(commentaire);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour du commentaire du forum');
    });
};

// Supprimer un commentaire du forum par ID
const supprimerCommentaireForum = (req, res) => {
  CommentairesForum.findByIdAndRemove(req.params.id)
    .then((commentaire) => {
      if (!commentaire) {
        return res.status(404).send('Commentaire du forum non trouvé');
      }
      res.json(commentaire);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression du commentaire du forum');
    });
};

module.exports = {
  creerCommentaireForum,
  obtenirCommentairesForum,
  obtenirCommentaireForumParID,
  mettreAJourCommentaireForum,
  supprimerCommentaireForum,
};
