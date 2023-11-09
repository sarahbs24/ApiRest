const AvisUtilisateurs = require('../modeles/avis');

// Créer un nouvel avis utilisateur
const creerAvisUtilisateur = (req, res) => {
  const nouvelAvisUtilisateur = new AvisUtilisateurs(req.body);
  nouvelAvisUtilisateur
    .save()
    .then((avis) => {
      res.json(avis);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'avis utilisateur');
    });
};

// Obtenir tous les avis utilisateurs
const obtenirAvisUtilisateurs = (req, res) => {
  AvisUtilisateurs.find({})
    .then((avis) => {
      res.json(avis);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des avis utilisateurs');
    });
};

// Obtenir un avis utilisateur par ID
const obtenirAvisUtilisateurParID = (req, res) => {
  AvisUtilisateurs.findById(req.params.id)
    .then((avis) => {
      if (!avis) {
        return res.status(404).send('Avis utilisateur non trouvé');
      }
      res.json(avis);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération de l\'avis utilisateur');
    });
};

// Mettre à jour un avis utilisateur par ID
const mettreAJourAvisUtilisateur = (req, res) => {
  AvisUtilisateurs.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((avis) => {
      if (!avis) {
        return res.status(404).send('Avis utilisateur non trouvé');
      }
      res.json(avis);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour de l\'avis utilisateur');
    });
};

// Supprimer un avis utilisateur par ID
const supprimerAvisUtilisateur = (req, res) => {
  AvisUtilisateurs.findByIdAndDelete(req.params.id)
    .then((avis) => {
      if (!avis) {
        return res.status(404).send('Avis utilisateur non trouvé');
      }
      res.json(avis);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'avis utilisateur');
    });
};

module.exports = {
  creerAvisUtilisateur,
  obtenirAvisUtilisateurs,
  obtenirAvisUtilisateurParID,
  mettreAJourAvisUtilisateur,
  supprimerAvisUtilisateur,
};
