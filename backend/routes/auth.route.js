const Express = require('express');
const Router = Express.Router();
const AuthController = require('../controllers/auth.controller');
router.post('/SignUp', AuthController.SignUp);
export default Router;
