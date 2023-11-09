const express = require('express');
const router = express.Router();
const commentairesForumController = require('../controllers/commentaireForumController');

// Créer un nouveau commentaire du forum
router.post('/commentairesforum', commentairesForumController.creerCommentaireForum);

// Obtenir tous les commentaires du forum
router.get('/commentairesforum', commentairesForumController.obtenirCommentairesForum);

// Obtenir un commentaire du forum par ID
router.get('/commentairesforum/:id', commentairesForumController.obtenirCommentaireForumParID);

// Mettre à jour un commentaire du forum par ID
router.put('/commentairesforum/:id', commentairesForumController.mettreAJourCommentaireForum);

// Supprimer un commentaire du forum par ID
router.delete('/commentairesforum/:id', commentairesForumController.supprimerCommentaireForum);

module.exports = router;
