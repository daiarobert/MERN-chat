import {create} from "zustand";

const useChats = create((set) => ({
    selectedChat: null,
    setSelectedChat: (selectedChat) => set ({selectedChat}),
    messages: [],
    setMessages: (messages) => set({ messages }),
}))

export default useChats;