import AppProvider from "./providers";
import AppRouter from "./routes";
import { UserProvider } from "@/pages/DashboardAdmin/userContext";

export default function App() {
  return (
    <AppProvider>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </AppProvider>
  );
}
