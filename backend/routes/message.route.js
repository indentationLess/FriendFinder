import express from "express";
import protect from "../middleware/authorizeuser";
const Router = express.Router();
Router.route('/').post(protect, sendMessage);
Router.route('/:chatId').get(protect, fetchMessages);
export default Router;