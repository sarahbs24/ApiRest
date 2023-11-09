const express = require('express');
const router = express.Router();
const initiativesController = require('../controllers/initiativeController');

// Créer une nouvelle initiative
router.post('/initiatives', initiativesController.creerInitiative);

// Obtenir toutes les initiatives
router.get('/initiatives', initiativesController.obtenirInitiatives);

// Obtenir une initiative par ID
router.get('/initiatives/:id', initiativesController.obtenirInitiativeParID);

// Mettre à jour une initiative par ID
router.put('/initiatives/:id', initiativesController.mettreAJourInitiative);

// Supprimer une initiative par ID
router.delete('/initiatives/:id', initiativesController.supprimerInitiative);

module.exports = router;
