import Express from 'express';
// import { getAllUsers } from '../controllers/user.controller.js';
import protect from '../middleware/authorizeuser.js';
const Router = Express.Router();
// Router.route('/').get(protect,getAllUsers);
export default Router; 
  