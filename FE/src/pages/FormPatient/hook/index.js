import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const getEmailFromLocalStorage = () => {
  // Ambil email dari localStorage
  const storedEmail = sessionStorage.getItem("email-user");
  return storedEmail ? storedEmail : "";
};

const getNameFromLocalStorage = () => {
  // Ambil email dari localStorage
  const storedEmail = sessionStorage.getItem("username-user");
  return storedEmail ? storedEmail : "";
};

export const useChatUser = () => {
  const formSchema = z.object({
    email: z.string().min(1, "Email is Required").email("Invalid email"),
    username: z.string().min(1, "Username is Required"),
  });
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    sessionStorage.setItem("email-user", values.email);
    sessionStorage.setItem("username-user", values.username);

    try {
      getEmailFromLocalStorage();
      getNameFromLocalStorage();
      console.log("Form values", form.getValues());
    } catch (error) {}
  }

  return { form, onSubmit };
};
