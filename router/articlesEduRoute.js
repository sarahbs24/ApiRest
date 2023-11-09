const express = require('express');
const router = express.Router();
const articlesEducController = require('../controllers/articlesEduController');

// Créer un nouvel article éducatif
router.post('/articles-educ', articlesEducController.creerArticleEduc);

// Obtenir tous les articles éducatifs
router.get('/articles-educ', articlesEducController.obtenirArticlesEduc);

// Obtenir un article éducatif par ID
router.get('/articles-educ/:id', articlesEducController.obtenirArticleEducParID);

// Mettre à jour un article éducatif par ID
router.put('/articles-educ/:id', articlesEducController.mettreAJourArticleEduc);

// Supprimer un article éducatif par ID
router.delete('/articles-educ/:id', articlesEducController.supprimerArticleEduc);

module.exports = router;
