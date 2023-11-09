const InscriptionsEvenements = require('../modeles/inscriptionEvenements');

// Inscrire un utilisateur à un événement
const inscrireUtilisateurEvenement = (req, res) => {
  const nouvelleInscription = new InscriptionsEvenements(req.body);
  nouvelleInscription.save((err, inscription) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de l\'inscription à l\'événement');
    } else {
      res.json(inscription);
    }
  });
};

// Obtenir toutes les inscriptions aux événements
const obtenirInscriptionsEvenements = (req, res) => {
  InscriptionsEvenements.find({}, (err, inscriptions) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des inscriptions aux événements');
    } else {
      res.json(inscriptions);
    }
  });
};

// Obtenir les inscriptions d'un utilisateur
const obtenirInscriptionsUtilisateur = (req, res) => {
  InscriptionsEvenements.find({ utilisateur: req.params.id })
    .populate('evenement')
    .exec((err, inscriptions) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la récupération des inscriptions de l\'utilisateur');
      } else {
        res.json(inscriptions);
      }
    });
};

// Annuler une inscription à un événement
const annulerInscriptionEvenement = (req, res) => {
  InscriptionsEvenements.findByIdAndRemove(req.params.id, (err, inscription) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de l\'annulation de l\'inscription à l\'événement');
    } else {
      res.json(inscription);
    }
  });
};

module.exports = {
  inscrireUtilisateurEvenement,
  obtenirInscriptionsEvenements,
  obtenirInscriptionsUtilisateur,
  annulerInscriptionEvenement,
};
