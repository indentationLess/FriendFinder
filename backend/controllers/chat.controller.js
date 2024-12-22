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
    chat.find({users: { $elemMatch: { $eq: req.user.id }}}).populate("users", "-password")
    .populate("latestMessage")
    .populate("GroupAdmin", "-password")
    .sort({updatedAt: -1})
    .then(async (results) => {
        results = await user.populate(results, {path: "latestMessage.sender"});
    })
    res.status(200).send(results);
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}
const createGroup = async (req, res) => {
if (!req.body.users || !req.body.chatName) {
    return res.status(400).json({ message: "All Fields necessecary" });
}
var users = JSON.parse(req.body.users);
if (users.length < 2) {
    return res.status(400).json({ message: "add more users" });
}
users.push(req.user);
try {
    const groupChat = await chat.create({
        chatName: req.body.chatName,
        isGroupChat: true,
        users: users,
        groupAdmin: req.user.id,
    });
    const fullChat = await chat.findOne({_id: groupChat._id}).populate("users", "-password")
    .populate("GroupAdmin", "-password");
    res.status(200).send(fullChat);
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}
const renameGroups = async (req, res) => {
const {chatID, chatName} = req.body;
if (!chatID || !chatName) {
    return res.status(400).json({ message: "All fields are required" });
}
try {
    const updatedChat = await chat.findByIdAndUpdate
    (chatID, {chatName: chatName}, {new: true}).populate("users", "-password")
    .populate("latestMessage")
    .populate("GroupAdmin", "-password");
    res.status(200).send(updatedChat);
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}   
const addToGroup = async (req, res) => {
const {chatID, users} = req.body;
if (!chatID || !users) {
    return res.status(400).json({ message: "All fields are required" });
}
try {
    const updatedChat = await chat.findByIdAndUpdate
    (chatID, {$push: {users: users}}, {new: true}).populate("users", "-password")
    .populate("latestMessage")
    .populate("GroupAdmin", "-password");
    res.status(200).send(updatedChat);
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}
const removeFromGroup = async (req, res) => {
const {chatID, userID} = req.body;
if (!chatID || !userID) {
    return res.status(400).json({ message: "All fields are required" });
}
try {
    const updatedChat = await chat.findByIdAndUpdate
    (chatID, {$pull: {users: userID}}, {new: true}).populate("users", "-password")
    .populate("latestMessage")
    .populate("GroupAdmin", "-password");
    res.status(200).send(updatedChat);
}
catch (error) {
    res.status(409).json({ message: error.message });
}
}
export default {accessChat, fetchChat, createGroup, renameGroups, addToGroup, removeFromGroup};
