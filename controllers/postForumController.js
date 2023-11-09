const PostsForum = require('../modeles/postForum');

// Créer un nouveau post du forum
const creerPostForum = (req, res) => {
  const nouveauPostForum = new PostsForum(req.body);
  nouveauPostForum.save()
    .then(post => res.json(post))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la création du post du forum');
    });
};

// Obtenir tous les posts du forum
const obtenirPostsForum = (req, res) => {
  PostsForum.find({})
    .then(posts => res.json(posts))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des posts du forum');
    });
};

// Obtenir un post du forum par ID
const obtenirPostForumParID = (req, res) => {
  PostsForum.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération du post du forum');
    });
};

// Mettre à jour un post du forum par ID
const mettreAJourPostForum = (req, res) => {
  PostsForum.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(post => res.json(post))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour du post du forum');
    });
};


// Supprimer un post du forum par ID
const supprimerPostForum = (req, res) => {
  PostsForum.deleteOne({ _id: req.params.id })
    .then(post => res.json(post))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression du post du forum');
    });
};


module.exports = {
  creerPostForum,
  obtenirPostsForum,
  obtenirPostForumParID,
  mettreAJourPostForum,
  supprimerPostForum,
};
