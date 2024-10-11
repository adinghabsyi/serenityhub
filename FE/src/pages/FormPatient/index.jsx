import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useChatUser } from "./hook/index";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

const FormPatient = () => {
  const navigate = useNavigate();
  const { form, onSubmit } = useChatUser();

  const handleSubmit = (values) => {
    onSubmit(values);
    navigate("/tanya-dokter/bidanku/form-pasien/ruang-tunggu");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="bg-white p-6 rounded shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Form Patient</h2>

          {/* Input for Username */}
          <div className="mb-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Input for Email */}
          <div className="mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default FormPatient;
