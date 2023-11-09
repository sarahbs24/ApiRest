const Evenements = require('../modeles/evenements');

// Créer un nouvel événement
const creerEvenement = (req, res) => {
  const nouvelEvenement = new Evenements(req.body);
  nouvelEvenement.save()
    .then(evenement => res.json(evenement))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'événement');
    });
};

// Obtenir tous les événements
const obtenirEvenements = (req, res) => {
  Evenements.find({})
    .then(evenements => res.json(evenements))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des événements');
    });
};

// Obtenir un événement par ID
const obtenirEvenementParID = (req, res) => {
  Evenements.findById(req.params.id)
    .then(evenement => res.json(evenement))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération de l\'événement');
    });
};

// Mettre à jour un événement par ID
const mettreAJourEvenement = (req, res) => {
  Evenements.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(evenement => res.json(evenement))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour de l\'événement');
    });
};

// Supprimer un événement par ID
const supprimerEvenement = (req, res) => {
  Evenements.deleteOne({ _id: req.params.id })
    .then(evenement => res.json(evenement))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'événement');
    });
};
module.exports = {
  creerEvenement,
  obtenirEvenements,
  obtenirEvenementParID,
  mettreAJourEvenement,
  supprimerEvenement,
};
