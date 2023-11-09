const Initiatives = require('../modeles/initiative');

// Créer une nouvelle initiative
const creerInitiative = (req, res) => {
  const nouvelleInitiative = new Initiatives(req.body);
  nouvelleInitiative
    .save()
    .then((initiative) => {
      res.json(initiative);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'initiative');
    });
};


// Obtenir toutes les initiatives
const obtenirInitiatives = (req, res) => {
  Initiatives.find({})
    .then((initiatives) => {
      res.json(initiatives);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des initiatives');
    });
};

// Obtenir une initiative par ID
const obtenirInitiativeParID = (req, res) => {
  Initiatives.findById(req.params.id)
    .then((initiative) => {
      if (!initiative) {
        return res.status(404).send('Initiative non trouvée');
      }
      res.json(initiative);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération de l\'initiative');
    });
};

// Mettre à jour une initiative par ID
const mettreAJourInitiative = (req, res) => {
  Initiatives.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((initiative) => {
      if (!initiative) {
        return res.status(404).send('Initiative non trouvée');
      }
      res.json(initiative);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour de l\'initiative');
    });
};


// Supprimer une initiative par ID
const supprimerInitiative = (req, res) => {
  Initiatives.findByIdAndDelete(req.params.id)
    .then((initiative) => {
      if (!initiative) {
        return res.status(404).send('Initiative non trouvée');
      }
      res.json(initiative);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'initiative');
    });
};

module.exports = {
  creerInitiative,
  obtenirInitiatives,
  obtenirInitiativeParID,
  mettreAJourInitiative,
  supprimerInitiative,
};
