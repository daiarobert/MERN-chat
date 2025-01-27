import Conversation from "../models/conversation.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";

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


// export const getMessages = async (req, res) => {
//     try {
//         const usertoChatId = req.params.id
//         const senderId = req.user._id
//         console.log(senderId)

//         const conversation = await Conversation.findOne({
//             participants: {$all: [senderId, usertoChatId]}
//         }).populate("messages")
        

//         if(!conversation) return res.status(200).json([]);
        
//         res.status(200).json(conversation.messages)

        


//     } catch (err) {
//         console.log( "Error -> getMessages controller ", err.message);
//         res.status(500).json({err: "Internal server error"})
//     }
// }

export const getMessages = async (req, res) => {
    try {
      const userToChatId = req.params.id; // Receiver ID from the route parameter
      const senderId = req.user._id; // Sender ID from authenticated user
  
      // Convert the IDs to ObjectId
      const senderObjectId = new mongoose.Types.ObjectId(senderId);
      const receiverObjectId = new mongoose.Types.ObjectId(userToChatId);
  
      console.log("Sender ID:", senderObjectId, typeof senderObjectId);
      console.log("User to Chat ID:", receiverObjectId, typeof receiverObjectId);
  
      // Find the conversation
      const conversation = await Conversation.findOne({
        participants: { $all: [senderObjectId, receiverObjectId] }
      }).populate("messages");
  
      if (!conversation) {
        console.log("No conversation found for participants:", senderObjectId, receiverObjectId);
        return res.status(200).json([]);
      }
  
      console.log("Found Conversation:", conversation);
  
      res.status(200).json(conversation.messages);
  
    } catch (err) {
      console.error("Error in getMessages:", err.message);
      res.status(500).json({ err: "Internal server error" });
    }
  };

