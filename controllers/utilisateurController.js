const Utilisateur = require('../modeles/utilisateur');

// Créer un utilisateur
const creerUtilisateur = (req, res) => {
  const nouvelUtilisateur = new Utilisateur(req.body);
  nouvelUtilisateur.save()
    .then(utilisateur => res.json(utilisateur))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'utilisateur');
    });
};

// Obtenir tous les utilisateurs
const obtenirUtilisateurs = (req, res) => {
  Utilisateur.find({})
    .then(utilisateurs => res.json(utilisateurs))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des utilisateurs');
    });
};

// Mettre à jour un utilisateur par ID
const mettreAJourUtilisateur = (req, res) => {
  Utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(utilisateur => res.json(utilisateur))
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
    });
};

// Supprimer un utilisateur par ID
const supprimerUtilisateur = (req, res) => {
  Utilisateur.deleteOne({ _id: req.params.id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).send('Utilisateur non trouvé');
      }
      res.json({ message: 'Utilisateur supprimé avec succès' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    });
};

module.exports = {
  creerUtilisateur,
  obtenirUtilisateurs,
  mettreAJourUtilisateur,
  supprimerUtilisateur,
};
