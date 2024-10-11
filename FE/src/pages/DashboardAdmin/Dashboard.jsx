import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useChat } from "./hook/chat";

const Dashboard = () => {
  const { onSubmit, chats } = useChat();
  const { register, handleSubmit, reset } = useForm();

  // Log the chats array
  console.log("Chats:", chats);

  const handleFormSubmit = (data) => {
    const email = chats.length > 0 ? chats[0].email : "-"; // Get the email of the user or "-"
    onSubmit({ ...data, email });
    reset(); // Reset the input field
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Chat with{"  "}
            {chats.length > 0
              ? chats[0].username // Display the username of the first chat
              : "Pasien" // Default text when no chats are available
            }
          </h2>

          <div className="h-64 border border-gray-300 p-4 rounded-lg overflow-y-scroll mb-4">
            {/* Daftar chat ditampilkan di sini */}
            {chats.length > 0 ? (
              chats.map((chat) => (
                <div key={chat.email}>
                  {chat.messages.map((msg, msgIndex) => (
                    <div
                      key={msgIndex}
                      className={`mb-2 ${
                        msg.sender === "admin" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`rounded-md p-2 inline-block ${
                          msg.sender === "admin"
                            ? "bg-blue-200"
                            : "bg-gray-200 mr-auto"
                        }`}
                      >
                        <div>{msg.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No chats available
              </div>
            )}
          </div>

          {/* Form untuk mengirim pesan */}
          <form
            className="flex gap-2 px-2 justify-between items-center"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Input
              type="text"
              placeholder="Message"
              {...register("message")}
              className="flex-grow"
              disabled={chats.length === 0} // Disable input jika tidak ada user di chat
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded ml-2 ${
                chats.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
              disabled={chats.length === 0} // Disable tombol jika tidak ada user
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
