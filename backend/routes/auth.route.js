const Express = require('express');
const Router = Express.Router();
const AuthController = require('../controllers/auth.controller');
Router.post('/SignUp', AuthController.SignUp);
Router.post('/SignIn', AuthController.SignIn);
export default Router;
