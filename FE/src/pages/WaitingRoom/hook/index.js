import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

export const useWaitingUser = () => {
  const [isRoomFull, setIsRoomFull] = useState(false); // Periksa apakah room penuh

  useEffect(() => {
    // Mendengarkan event roomStatus dari server
    socket.on("roomStatus", (isRoomFull) => {
      console.log("Room status received:", isRoomFull); // Debug: pastikan status diterima
      setIsRoomFull(isRoomFull); // Mengatur status berdasarkan data dari server
    });

    // Bersihkan listener saat komponen di-unmount
    return () => {
      socket.off("roomStatus");
    };
  }, []);

  return { isRoomFull };
};
