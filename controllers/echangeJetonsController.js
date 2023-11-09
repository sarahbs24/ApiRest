const EchangeJetons = require('../modeles/echangeJetons');

// Créer un nouvel échange de jetons
const creerEchangeJetons = (req, res) => {
  const nouvelEchange = new EchangeJetons(req.body);
  nouvelEchange
    .save()
    .then(echange => res.json(echange))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'échange de jetons');
    });
};

// Obtenir tous les échanges de jetons
const obtenirEchangesJetons = (req, res) => {
  EchangeJetons
    .find({})
    .populate('utilisateur')
    .exec()
    .then(echanges => res.json(echanges))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des échanges de jetons');
    });
};

// Obtenir les échanges de jetons d'un utilisateur
const obtenirEchangesUtilisateur = (req, res) => {
  EchangeJetons
    .find({ utilisateur: req.params.id })
    .populate('utilisateur')
    .exec()
    .then(echanges => res.json(echanges))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des échanges de jetons de l\'utilisateur');
    });
};

// Supprimer un échange de jetons par ID
const supprimerEchangeJetons = (req, res) => {
  EchangeJetons
    .findOneAndRemove({ _id: req.params.id })
    .then(echange => {
      if (!echange) {
        return res.status(404).send('Échange de jetons non trouvé');
      }
      res.json(echange);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'échange de jetons');
    });
};


module.exports = {
  creerEchangeJetons,
  obtenirEchangesJetons,
  obtenirEchangesUtilisateur,
  supprimerEchangeJetons,
};
