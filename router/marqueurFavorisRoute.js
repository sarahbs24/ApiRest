const express = require('express');
const router = express.Router();
const marqueursFavorisController = require('../controllers/marqueurFavorisController');

// Créer un nouveau marqueur favori
router.post('/marqueursfavoris', marqueursFavorisController.creerMarqueurFavori);

// Obtenir tous les marqueurs favoris
router.get('/marqueursfavoris', marqueursFavorisController.obtenirMarqueursFavoris);

// Obtenir un marqueur favori par ID
router.get('/marqueursfavoris/:id', marqueursFavorisController.obtenirMarqueurFavoriParID);

// Supprimer un marqueur favori par ID
router.delete('/marqueursfavoris/:id', marqueursFavorisController.supprimerMarqueurFavori);

module.exports = router;
