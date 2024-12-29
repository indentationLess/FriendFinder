import express from "express";
import protect from "../middleware/authorizeuser.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const Router = express.Router();
Router.route('/').post(protect, sendMessage);
Router.route('/:chatId').get(protect, getMessages);

export default Router;