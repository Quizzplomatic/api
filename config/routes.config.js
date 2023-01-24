const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const quizController = require('../controllers/quiz.controller');

const authMiddleware = require('../middlewares/auth.middleware');

router.post('/new', quizController.create);
router.get('/quiz', quizController.list);
router.patch('/update', quizController.update);
router.delete('/delete/:id', quizController.delete);

router.post('/users', authMiddleware.isNotAuthenticated, authController.register);
router.post('/login', authMiddleware.isNotAuthenticated, authController.login);
router.get('/users/me', authMiddleware.isAuthenticated, userController.getCurrentUser);
router.get('/users/:id', userController.getUserById);

module.exports = router;