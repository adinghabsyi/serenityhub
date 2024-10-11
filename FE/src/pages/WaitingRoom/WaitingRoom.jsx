import { Link } from "react-router-dom";
import { useWaitingUser } from "./hook";


const WaitingRoom = () => {
  const { isRoomFull } = useWaitingUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Waiting Room</h2>
        <p className="mb-4">
          {isRoomFull ? "The room is occupied." : "The room is empty. You can join!"}
        </p>
        <button
          // onClick={onSubmit}
          disabled={isRoomFull} // Disable button jika room penuh
          className={`${
            isRoomFull
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded w-full`}
        >
          {!isRoomFull ? (
            <Link to="/ruang-chat">Join Chat Room</Link>
          ) : (
            "Room Full"
          )}
        </button>
      </div>
    </div>
  );
};

export default WaitingRoom;
