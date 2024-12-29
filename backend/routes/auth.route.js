import Express from "express";
const Router = Express.Router();
import UserController from "../controllers/user.controller.js"
Router.post('/SignUp', UserController.SignUp);
Router.post('/SignIn', UserController.SignIn);
export default Router;
