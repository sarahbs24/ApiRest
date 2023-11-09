const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entrepriseController');

// Créer une entreprise
router.post('/entreprises', entrepriseController.creerEntreprise);

// Obtenir toutes les entreprises
router.get('/entreprises', entrepriseController.obtenirEntreprises);

// Mise à jour d'une entreprise par ID
router.put('/entreprises/:id', entrepriseController.mettreAJourEntreprise);

// Suppression d'une entreprise par ID
router.delete('/entreprises/:id', entrepriseController.supprimerEntreprise);


module.exports = router;
