import chat from "../models/Chat";
import user from "../models/User";


const accessChat = async (req, res) => {
   const {userID} = req.body;
   if (!userID) {
       return res.status(400).json({ message: "User ID is required" });
   }
   var isChat = await chat.find({
    isGroupChat: false,
    $and: [
        {users: {$elemMatch: { $eq: userID }}},
        {users: {$elemMatch: { $eq: req.user.id }}},
    ],
   }).populate("users", "-password").populate("latestMessage");
   isChat = await user.populate(isChat, {path: "latestMessage.sender"});
   if(isChat.length > 0) {
        res.send(isChat[0]);
   }
    else {
    var chatData = {
        chatName: "Sender",
        isGroupChat: false,
        users: [userID, req.user.id],
    }
    }
    try {
        const createdChat = await chat.create(chatData);
        const FullChat = await chat.findById(createdChat._id).populate("users", "-password");
        res.status(200).send(FullChat);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const fetchChat = async (req, res) => {
try {
    chat.find({users: { $elemMatch: { $eq: req.user.id }}}).populate("users", "-password").populate("latestMessage").sort({updatedAt: -1}).populate("GroupAdmin", "-password").exec(function (err, result) {
        if (err) {
            res.status(409).json({ message: error.message });
        }
        res.status(200).send(result);
    }
    );
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}
export default {accessChat, fetchChat};
