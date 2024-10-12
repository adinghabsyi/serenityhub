import { useNavigate } from "react-router";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  // Mengecek apakah pengguna sudah login
  const isLoggedIn = sessionStorage.getItem("isAdminAuthenticated");

  // Redirect ke halaman login jika belum login
  if (!isLoggedIn) {
    return <Navigate to="/login-admin" replace />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    navigate("/login-admin");
  };


  return (
    <nav className="bg-black text-primary-foreground shadow-md top-0 left-0 absolute w-full">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Text dashboard akan tetap berada di tengah */}
          <h1 className="text-xl font-semibold flex-grow text-center">
            Dashboard
          </h1>

          {/* Tombol logout di sebelah kanan */}
          <button
            onClick={handleLogout}
            className="ml-auto bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
