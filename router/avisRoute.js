const express = require('express');
const router = express.Router();
const avisUtilisateursController = require('../controllers/avisController');

// Créer un nouvel avis utilisateur
router.post('/avisutilisateurs', avisUtilisateursController.creerAvisUtilisateur);

// Obtenir tous les avis utilisateurs
router.get('/avisutilisateurs', avisUtilisateursController.obtenirAvisUtilisateurs);

// Obtenir un avis utilisateur par ID
router.get('/avisutilisateurs/:id', avisUtilisateursController.obtenirAvisUtilisateurParID);

// Mettre à jour un avis utilisateur par ID
router.put('/avisutilisateurs/:id', avisUtilisateursController.mettreAJourAvisUtilisateur);

// Supprimer un avis utilisateur par ID
router.delete('/avisutilisateurs/:id', avisUtilisateursController.supprimerAvisUtilisateur);

module.exports = router;
