const express = require('express');
const router = express.Router();
const evenementsController = require('../controllers/evenementsController');

// Créer un nouvel événement
router.post('/evenements', evenementsController.creerEvenement);

// Obtenir tous les événements
router.get('/evenements', evenementsController.obtenirEvenements);

// Obtenir un événement par ID
router.get('/evenements/:id', evenementsController.obtenirEvenementParID);

// Mettre à jour un événement par ID
router.put('/evenements/:id', evenementsController.mettreAJourEvenement);

// Supprimer un événement par ID
router.delete('/evenements/:id', evenementsController.supprimerEvenement);

module.exports = router;
