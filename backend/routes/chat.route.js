import express from "express";
import protect from "../middleware/authorizeuser.js";
import chatController from "../controllers/chat.controller.js";

const router = express.Router();
router.route('/').post(protect, chatController.accessChat);
router.route('/').get(protect, chatController.fetchChat);
router.route('/group').post(protect, chatController.createGroup);
router.route('/rename').put(protect, chatController.renameGroups);
router.route('/groupadd').put(protect, chatController.addToGroup);
router.route('/groupremove').put(protect, chatController.removeFromGroup);

export default router;