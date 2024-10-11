import React from "react";
import { useRoomUser } from "./hook"; // Import hook useChat yang sudah Anda buat
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const RoomChat = () => {
  const { form, onSubmit, messages } = useRoomUser(); // Menggunakan hook useRoomUser

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Chat with Admin</h2>

        <div className="h-64 border border-gray-300 p-4 rounded-lg overflow-y-scroll mb-4">
          {/* Daftar chat ditampilkan di sini */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.to === "admin" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded-md ${
                  msg.to === "admin" ? "bg-blue-100" : "bg-green-100 ml-auto"
                }`}
              >
                <div className="text-sm">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form untuk mengirim pesan */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Type a message"
                      className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RoomChat;
