import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { z } from "zod";
import socket from "./socket"; // impor dari file terpisah

import { useNavigate } from "react-router-dom"; // Import untuk navigasi

export const useRoomUser = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

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

    const handleChatEnded = () => {
      // Admin has ended the chat, so navigate back to home
      sessionStorage.removeItem("email-user");
      sessionStorage.removeItem("username-user");
      localStorage.removeItem("messages");
      window.location.reload();
      navigate("/"); // Arahkan user kembali ke halaman home
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("chatEnded", handleChatEnded); // Listen for chatEnded event

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("chatEnded", handleChatEnded);
    };
  }, [email, username, navigate]);

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
