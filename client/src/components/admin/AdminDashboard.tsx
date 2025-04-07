import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const AdminDashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 mx-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/testimonials"
          className={`shadow-md rounded-lg p-6 w-64 text-center hover:scale-103 transition ${
            theme === "dark" ? "bg-[#fff5ec] text-[#333333]" : "bg-[#333333] text-[#fff5ec]"
          }`}
        >
          📢 Manage Testimonials
        </Link>
        <Link
          to="/admin/messages"
          className={`shadow-md rounded-lg p-6 w-64 text-center hover:scale-103 transition ${
            theme === "dark" ? "bg-[#fff5ec] text-[#333333]" : "bg-[#333333] text-[#fff5ec]"
          }`}
        >
          📩 View Messages
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
