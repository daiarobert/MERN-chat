import {create} from "zustand";

const useChats = create((set) => ({
    selectedChat: null,
    setSelectedChat: (selectedChat) => set ({selectedChat}),
    messages: [],
    setMessages: (messages) => {
        console.log("Setting messages:", messages); // Ensure this logs an array
        set({ messages });
    },
}))

export default useChats;