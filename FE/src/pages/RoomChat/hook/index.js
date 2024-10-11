import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import socket from "./socket"; // impor dari file terpisah

export const useRoomUser = () => {
  const [messages, setMessages] = useState([]);

  const email = sessionStorage.getItem("email-user");
  const username = sessionStorage.getItem("username-user");

  useEffect(() => {
    if (!email || !username) {
      // Clear local storage if session storage is missing
      localStorage.removeItem("messages");
      setMessages([]);
      return;
    } else {
      // Load messages from localStorage if session storage exists
      const savedMessages = localStorage.getItem("messages");
      setMessages(savedMessages ? JSON.parse(savedMessages) : []);
    }

    const isAdmin = false;
    socket.emit("register", { email, username, isAdmin });
    console.log(`User registered: ${username} (${email}), socket ID: ${socket.id}`);

    const handleReceiveMessage = (message) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message];
        localStorage.setItem("messages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [email, username]);

  const formSchema = z.object({
    message: z.string().min(1, "Message is required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values) => {
    const messageData = {
      username,
      email,
      message: values.message,
      to: "admin",
    };
    socket.emit("sendMessage", messageData);
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, messageData];
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
    form.reset();
  };

  return { form, onSubmit, messages };
};

