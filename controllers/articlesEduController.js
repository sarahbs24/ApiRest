const ArticlesEduc = require('../modeles/articlesEdu');

// Créer un nouvel article éducatif
const creerArticleEduc = (req, res) => {
  const nouvelArticle = new ArticlesEduc(req.body);
  nouvelArticle
    .save()
    .then((article) => {
      res.json(article);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'article éducatif');
    });
};

// Obtenir tous les articles éducatifs
const obtenirArticlesEduc = (req, res) => {
  ArticlesEduc.find({})
    .populate('categorie')
    .exec()
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des articles éducatifs');
    });
};

// Obtenir un article éducatif par ID
const obtenirArticleEducParID = (req, res) => {
  ArticlesEduc.findById(req.params.id)
    .then((article) => {
      if (!article) {
        return res.status(404).send('Article éducatif non trouvé');
      }
      res.json(article);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération de l\'article éducatif');
    });
};

// Mettre à jour un article éducatif par ID
const mettreAJourArticleEduc = (req, res) => {
  ArticlesEduc.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((article) => {
      if (!article) {
        return res.status(404).send('Article éducatif non trouvé');
      }
      res.json(article);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour de l\'article éducatif');
    });
};

// Supprimer un article éducatif par ID
const supprimerArticleEduc = (req, res) => {
  ArticlesEduc.findByIdAndDelete(req.params.id)
    .then((article) => {
      if (!article) {
        return res.status(404).send('Article éducatif non trouvé');
      }
      res.json(article);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'article éducatif');
    });
};

module.exports = {
  creerArticleEduc,
  obtenirArticlesEduc,
  obtenirArticleEducParID,
  mettreAJourArticleEduc,
  supprimerArticleEduc,
};
