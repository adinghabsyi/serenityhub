import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

export const useWaitingUser = () => {
    const [isRoomFull, setIsRoomFull] = useState(false); // Check if the room is full
    const [queueCount, setQueueCount] = useState(0); // Track the queue count

    useEffect(() => {
        // Listen for room status event from the server
        socket.on("roomStatus", ({ full, queueCount }) => {
            console.log("Room status received:", full, queueCount); // Debug: check the received status
            setIsRoomFull(full); // Set the room status based on data from server
            setQueueCount(queueCount); // Update queue count
        });

        // Listen for queue updates from the server
        socket.on("queueStatus", (newQueueCount) => {
            console.log("Queue updated:", newQueueCount); // Debug: check the updated queue count
            setQueueCount(newQueueCount); // Update queue count
        });

        // Clean up listeners on component unmount
        return () => {
            socket.off("roomStatus");
            socket.off("queueStatus");
        };
    }, []);

    return { isRoomFull, queueCount }; // Return room status and queue count
};
