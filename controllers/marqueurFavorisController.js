const MarqueursFavoris = require('../modeles/marqueurFavoris');

// Créer un nouveau marqueur favori
const creerMarqueurFavori = (req, res) => {
  const nouveauMarqueurFavori = new MarqueursFavoris(req.body);
  nouveauMarqueurFavori.save((err, marqueur) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la création du marqueur favori');
    } else {
      res.json(marqueur);
    }
  });
};

// Obtenir tous les marqueurs favoris
const obtenirMarqueursFavoris = (req, res) => {
  MarqueursFavoris.find({}, (err, marqueurs) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des marqueurs favoris');
    } else {
      res.json(marqueurs);
    }
  });
};

// Obtenir un marqueur favori par ID
const obtenirMarqueurFavoriParID = (req, res) => {
  MarqueursFavoris.findById(req.params.id, (err, marqueur) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération du marqueur favori');
    } else {
      res.json(marqueur);
    }
  });
};

// Supprimer un marqueur favori par ID
const supprimerMarqueurFavori = (req, res) => {
  MarqueursFavoris.findByIdAndRemove(req.params.id, (err, marqueur) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression du marqueur favori');
    } else {
      res.json(marqueur);
    }
  });
};

module.exports = {
  creerMarqueurFavori,
  obtenirMarqueursFavoris,
  obtenirMarqueurFavoriParID,
  supprimerMarqueurFavori,
};
