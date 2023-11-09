const express = require('express');
const router = express.Router();
const postsForumController = require('../controllers/postForumController');

// Créer un nouveau post du forum
router.post('/postsforum', postsForumController.creerPostForum);

// Obtenir tous les posts du forum
router.get('/postsforum', postsForumController.obtenirPostsForum);

// Obtenir un post du forum par ID
router.get('/postsforum/:id', postsForumController.obtenirPostForumParID);

// Mettre à jour un post du forum par ID
router.put('/postsforum/:id', postsForumController.mettreAJourPostForum);

// Supprimer un post du forum par ID
router.delete('/postsforum/:id', postsForumController.supprimerPostForum);

module.exports = router;
