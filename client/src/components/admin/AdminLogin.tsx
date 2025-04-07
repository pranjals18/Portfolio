import { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-o8ve.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token);
        navigate("/admin/dashboard");
      } else {
        toast.error(data.message || "Invalid credentials. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={`h-[60vh] w-full flex rounded-4xl shadow-2xl ${ theme === "dark" ? "shadow-[#fff5ec]" : "shadow-[#000000]"} `}>
        {/* Left Side - Image */}
        <div 
          className="w-3/5 flex justify-center overflow-hidden rounded-l-4xl items-center bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>

        {/* Right Side - Login Form */}
        <div className="w-3/7 flex flex-col justify-center items-center p-12">
          <ToastContainer position="top-right" />

          <motion.h1
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: theme === "dark" ? "#fff5ec" : "#333333" }}
          >
            Admin Login
          </motion.h1>

          <form onSubmit={handleLogin} className="flex flex-col items-center w-2/3 max-w-sm">
            <motion.input
              type="text"
              className="border p-3 w-full rounded-md mb-4 focus:outline-none"
              placeholder="Enter Admin Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                backgroundColor: theme === "dark" ? "#555" : "#fff",
                color: theme === "dark" ? "#fff5ec" : "#333333",
                borderColor: theme === "dark" ? "#fff5ec" : "#333333",
              }}
              whileFocus={{ scale: 1.05 }}
            />

            <motion.input
              type="password"
              className="border p-3 w-full rounded-md mb-4 focus:outline-none"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: theme === "dark" ? "#555" : "#fff",
                color: theme === "dark" ? "#fff5ec" : "#333333",
                borderColor: theme === "dark" ? "#fff5ec" : "#333333",
              }}
              whileFocus={{ scale: 1.05 }}
            />

            <motion.button
              type="submit"
              className="px-6 py-2 rounded-md font-semibold w-full"
              style={{
                backgroundColor: theme === "dark" ? "#fff5ec" : "#333333",
                color: theme === "dark" ? "#333333" : "#fff5ec",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;