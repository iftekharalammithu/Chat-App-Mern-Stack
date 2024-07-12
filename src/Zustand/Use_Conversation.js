import { create } from "zustand";

const use_conversation = create((set) => ({
  select_Conversation: null,
  setSelect_Conversation: (payload) => set({ select_Conversation: payload }),
  messages: [],
  setMessages: (payload) => set({ messages: payload }),
}));
export default use_conversation;
