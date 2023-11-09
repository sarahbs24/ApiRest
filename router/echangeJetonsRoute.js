const express = require('express');
const router = express.Router();
const echangeJetonsController = require('../controllers/echangeJetonsController');

// Créer un nouvel échange de jetons
router.post('/echange-jetons', echangeJetonsController.creerEchangeJetons);

// Obtenir tous les échanges de jetons
router.get('/echange-jetons', echangeJetonsController.obtenirEchangesJetons);

// Obtenir les échanges de jetons d'un utilisateur
router.get('/echange-jetons/:idUtilisateur', echangeJetonsController.obtenirEchangesUtilisateur);

// Supprimer un échange de jetons par ID
router.delete('/echange-jetons/:id', echangeJetonsController.supprimerEchangeJetons);

module.exports = router;
