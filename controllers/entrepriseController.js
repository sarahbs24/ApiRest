const Entreprise = require('../modeles/entreprise');

// Créer une entreprise
const creerEntreprise = (req, res) => {
  const nouvelleEntreprise = new Entreprise(req.body);
  nouvelleEntreprise.save()
    .then(entreprise => res.json(entreprise))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'entreprise');
    });
};

// Obtenir toutes les entreprises
const obtenirEntreprises = (req, res) => {
  Entreprise.find({})
    .then(entreprises => res.json(entreprises))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des entreprises');
    });
};

// Mettre à jour une entreprise par ID
const mettreAJourEntreprise = (req, res) => {
  Entreprise.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(entreprise => {
      if (!entreprise) {
        return res.status(404).send('Entreprise non trouvée');
      }
      res.json(entreprise);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour de l\'entreprise');
    });
};

// Supprimer une entreprise par ID
const supprimerEntreprise = (req, res) => {
  Entreprise.deleteOne({ _id: req.params.id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).send('Entreprise non trouvée');
      }
      res.json({ message: 'Entreprise supprimée avec succès' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'entreprise');
    });
};

module.exports = {
  creerEntreprise,
  obtenirEntreprises,
  mettreAJourEntreprise,
  supprimerEntreprise,
  // Autres fonctions de contrôleurs
};
