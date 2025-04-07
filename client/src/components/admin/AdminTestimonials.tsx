import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/ThemeContext";

interface Testimonial {
  _id: string;
  name: string;
  text: string;
  approved: boolean;
}

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [view, setView] = useState<"approved" | "pending">("pending");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://portfolio-o8ve.onrender.com/testimonials")
      .then((res) => res.json())
      .then((data: Testimonial[]) => {
        const sortedTestimonials = data.sort(
          (a, b) =>
            parseInt(b._id.substring(0, 8), 16) -
            parseInt(a._id.substring(0, 8), 16)
        );
        setTestimonials(sortedTestimonials);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  const toggleApproval = (id: string, approved: boolean) => {
    fetch(`https://portfolio-o8ve.onrender.com/testimonials/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        setTestimonials((prev) =>
          prev.map((t) => (t._id === id ? { ...t, approved: !t.approved } : t))
        );
        toast.success(
          approved
            ? "Testimonial approval revoked successfully"
            : "Testimonial approved successfully"
        );
      })
      .catch((err) => {
        console.error("Error updating testimonial:", err);
        toast.error("Failed to update testimonial status");
      });
  };

  return (
    <div
      className="min-h-screen py-8 mx-12"
      // style={{ backgroundColor: theme === "dark" ? "#333333" : "#fff5ec", color: theme === "dark" ? "#fff5ec" : "#333333" }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Manage Testimonials</h1>
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-3 rounded-lg transition duration-300 ${
            view === "approved" ? "bg-green-600 text-[#fff5ec]" : "bg-gray-500 text-white"
          }`}
          onClick={() => setView("approved")}
        >
          Approved
        </button>
        <button
          className={`px-6 py-3 rounded-lg transition duration-300 ${
            view === "pending" ? "bg-blue-600 text-[#fff5ec]" : "bg-gray-500 text-white"
          }`}
          onClick={() => setView("pending")}
        >
          Pending
        </button>
      </div>

      <div className="p-6 shadow-lg rounded-lg" style={{ backgroundColor: theme === "dark" ? "#444444" : "#f2efe7" }}>
        {testimonials.filter((t) => (view === "approved" ? t.approved : !t.approved)).map((testimonial) => (
          <div key={testimonial._id} className="p-4 border-b flex justify-between items-center">
            <div>
              <p className="font-semibold w-96">{testimonial.name}</p>
              <p className="pr-16 w-xl">{testimonial.text}</p>
            </div>
            <button
              onClick={() => toggleApproval(testimonial._id, testimonial.approved)}
              className={`px-4 py-2 rounded-lg transition duration-300 ${
                testimonial.approved ? "bg-red-500 text-[#fff5ec]" : "bg-green-500 text-[#fff5ec]"
              }`}
            >
              {testimonial.approved ? "Remove Testimonial" : "Add Testimonial"}
            </button>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar closeOnClick />
    </div>
  );
};

export default AdminTestimonials;
