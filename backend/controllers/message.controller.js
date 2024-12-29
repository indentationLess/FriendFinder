import message from "../models/message.js";
import user from "../models/user.js";
import chat from "../models/chat.js";
import e from "express";
const sendMessage = async (req, res) => {
    const { chatID, content } = req.body;
    if (!chatID || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }
    var newMessage = {
        chat: chatID,
        sender: req.user.id,
        content: content,
    };
    try {
        var message = await message.create(newMessage);
        message = await message.populate("sender", "name")
        message = await message.populate("chat")
        message = await user.populate(message, { path: "chat.users",
            select: "name email" });
         await chat.findByIdAndUpdate(req.body.chatID, { latestMessage: message._id });
         res.status(200).send(message);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const getMessages = async (req, res) => {
   try{ const messages = await message.find({ chat: req.params.chatID }).populate("sender", "name")
    .populate("chat");
    res.json(messages);
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}
export default { sendMessage, getMessages };