import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000"); // Sesuaikan dengan URL server Anda

export const useChat = () => {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("chats");
    return savedChats ? JSON.parse(savedChats) : [];
  });

  useEffect(() => {
    socket.emit("register", { email: "admin", username: "admin", isAdmin: true });

    socket.on("receiveMessage", (messageData) => {
      setChats((prevChats) => {
        const existingChat = prevChats.find(
          (chat) => chat.email === messageData.email
        );

        const updatedChats = existingChat
          ? prevChats.map((chat) =>
              chat.email === messageData.email
                ? {
                    ...chat,
                    messages: [
                      ...chat.messages,
                      {
                        message: messageData.message,
                        sender: messageData.sender,
                      },
                    ],
                  }
                : chat
            )
          : [
              ...prevChats,
              {
                email: messageData.email,
                username: messageData.username,
                messages: [
                  {
                    message: messageData.message,
                    sender: messageData.sender,
                  },
                ],
                closed: false, // default to not closed
              },
            ];

        localStorage.setItem("chats", JSON.stringify(updatedChats));
        return updatedChats;
      });
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const onSubmit = (data) => {
    if (data.email !== "admin") {
      const messageData = {
        to: data.email,
        message: data.message,
        sender: "admin",
        username: "admin",
      };
      socket.emit("sendMessage", messageData);

      setChats((prevChats) => {
        const updatedChats = prevChats.map((chat) =>
          chat.email === data.email
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  { message: data.message, sender: "admin" },
                ],
              }
            : chat
        );

        localStorage.setItem("chats", JSON.stringify(updatedChats));
        return updatedChats;
      });
    } else {
      console.error("Admin cannot send message to itself.");
    }
  };

  return { onSubmit, chats };
};
