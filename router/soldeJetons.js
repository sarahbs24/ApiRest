const express = require('express');
const router = express.Router();
const soldeJetonsController = require('../controllers/soldeJetonsController');

// Créer un nouveau solde de jetons
router.post('/solde-jetons', soldeJetonsController.creerSoldeJetons);

// Obtenir le solde de jetons d'un utilisateur
router.get('/solde-jetons/:idUtilisateur', soldeJetonsController.obtenirSoldeJetonsUtilisateur);

// Mettre à jour le solde de jetons d'un utilisateur
router.put('/solde-jetons/:idUtilisateur', soldeJetonsController.mettreAJourSoldeJetons);

module.exports = router;
