const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

//Por default as rotas já estão definidas como 'http://localhost:3000/users'
router.get('/', userController.getUsers); //Buscar todos os usuários
router.get('/:id', userController.getById); //Busca por um usuário
router.post('/cadastro', userController.createUser); //Cria um novo usuário
router.put('/:id', userController.alterUser); //Alterar perfil usuário
router.delete('/:id', userController.deleteUser); //deleta uma conta de usuário

module.exports = router;