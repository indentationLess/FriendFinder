import Message from "../models/message.js";
import User from "../models/user.js";
import Chat from "../models/Chat.js";

const sendMessage = async (req, res) => {
    const { chatID, content } = req.body;
    if (!chatID || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }
    
    const newMessage = {
        chat: chatID,
        sender: req.user.id,
        content: content,
    };
    
    try {
        let messageObj = await Message.create(newMessage);
        messageObj = await messageObj.populate("sender", "name");
        messageObj = await messageObj.populate("chat");
        messageObj = await User.populate(messageObj, {
            path: "chat.users",
            select: "name email"
        });
        
        await Chat.findByIdAndUpdate(chatID, { 
            latestMessage: messageObj._id 
        });
        
        res.status(200).send(messageObj);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat");
        res.status(200).json(messages);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export { sendMessage, getMessages };