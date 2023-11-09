const SoldeJetons = require('../modeles/soldeJetons');

// Créer un nouveau solde de jetons
const creerSoldeJetons = (req, res) => {
  const nouveauSolde = new SoldeJetons(req.body);
  nouveauSolde.save()
    .then(solde => res.json(solde))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la création du solde de jetons');
    });
};

// Obtenir le solde de jetons d'un utilisateur
const obtenirSoldeJetonsUtilisateur = (req, res) => {
  SoldeJetons.findOne({ utilisateur: req.params.id })
    .then(solde => res.json(solde))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération du solde de jetons de l\'utilisateur');
    });
};

// Mettre à jour le solde de jetons d'un utilisateur
const mettreAJourSoldeJetons = (req, res) => {
  SoldeJetons.findOneAndUpdate({ utilisateur: req.params.id }, req.body, { new: true })
    .then(solde => res.json(solde))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour du solde de jetons de l\'utilisateur');
    });
};

module.exports = {
  creerSoldeJetons,
  obtenirSoldeJetonsUtilisateur,
  mettreAJourSoldeJetons,
};
