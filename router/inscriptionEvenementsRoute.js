const express = require('express');
const router = express.Router();
const inscriptionsEvenementsController = require('../controllers/inscriptionEvenementsController');

// Inscrire un utilisateur à un événement
router.post('/inscriptions', inscriptionsEvenementsController.inscrireUtilisateurEvenement);

// Obtenir toutes les inscriptions aux événements
router.get('/inscriptions', inscriptionsEvenementsController.obtenirInscriptionsEvenements);

// Obtenir les inscriptions d'un utilisateur
router.get('/inscriptions/:idUtilisateur', inscriptionsEvenementsController.obtenirInscriptionsUtilisateur);

// Annuler une inscription à un événement
router.delete('/inscriptions/:id', inscriptionsEvenementsController.annulerInscriptionEvenement);

module.exports = router;
