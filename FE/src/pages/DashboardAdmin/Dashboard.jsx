import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useChat } from "./hook/chat";

const Dashboard = () => {
  const { onSubmit, chats, endChat } = useChat();
  const { register, handleSubmit, reset } = useForm();

  // Mendapatkan chat pertama (jika ada)
  const currentChat = chats.length > 0 ? chats[0] : null;

  const handleFormSubmit = (data) => {
    const email = currentChat ? currentChat.email : "-"; // Ambil email dari chat atau "-"
    onSubmit({ ...data, email });
    reset(); // Reset input
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Chat with {currentChat ? currentChat.username : "Pasien"}
          </h2>

          <div className="h-64 border border-gray-300 p-4 rounded-lg overflow-y-scroll mb-4">
            {/* Daftar chat ditampilkan di sini */}
            {currentChat ? (
              currentChat.messages.map((msg, msgIndex) => (
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
              ))
            ) : (
              <div className="text-center text-gray-500">
                No chats available
              </div>
            )}
          </div>

          {/* Menampilkan pesan jika chat telah berakhir */}
          {currentChat && currentChat.closed && (
            <div className="text-center text-gray-500 mt-4">
              This chat has been ended.
            </div>
          )}

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
              disabled={!currentChat} // Disable input jika tidak ada chat aktif
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded ml-2 ${
                !currentChat
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
              disabled={!currentChat} // Disable tombol jika tidak ada chat aktif
            >
              Send
            </button>
          </form>
        </div>

        {/* Tombol End Chat */}
        {currentChat && (
          <button
            onClick={() => endChat(currentChat.email)}
            className="mb-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200 mt-10"
            disabled={currentChat.closed} // Disable tombol jika chat telah berakhir
          >
            End Chat
          </button>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
