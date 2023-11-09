const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

// Créer un utilisateur par ID
router.post('/utilisateurs', utilisateurController.creerUtilisateur);

// Obtenir tous les utilisateurs pa ID
router.get('/utilisateurs', utilisateurController.obtenirUtilisateurs);

// Mise à jour d'un utilisateur par ID
router.put('/utilisateurs/:id', utilisateurController.mettreAJourUtilisateur);

// Suppression d'un utilisateur par ID
router.delete('/utilisateurs/:id', utilisateurController.supprimerUtilisateur);

module.exports = router;
