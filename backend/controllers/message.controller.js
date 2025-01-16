import Conversation from "../models/conversation.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body
        const {id: receiverId} = req.params;
        const senderId = req.user._id

        console.log("Sender ID:", senderId);
        console.log("Receiver ID:", receiverId);


        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save();
        await newMessage.save();

        res.status(201).json(newMessage);

    } catch(err) {
        res.status(500).json({ err: "internal server error", err})
    }
};


export const getMessages = async (req, res) => {
    try {
        const usertoChatId = req.params.id
        const senderId = req.user._id
        console.log(senderId)

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, usertoChatId]}
        }).populate("messages")

        if(!conversation) return res.status(200).json([]);
        
        res.status(200).json(conversation.messages)


    } catch (err) {
        console.log( "Error -> getMessages controller ", err.message);
        res.status(500).json({err: "Internal server error"})
    }
}