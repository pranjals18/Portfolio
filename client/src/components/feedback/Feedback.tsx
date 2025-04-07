import { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/ThemeContext";

const Feedback = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const maxCharacters = 200;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !feedback.trim()) {
      toast.error("Please enter your name and feedback.");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:5000/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text: feedback }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback.");
      }

      toast.success("Thank you for your feedback! It will be reviewed before being displayed.");
      setName("");
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center mx-12"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      
      <h1 className="text-3xl font-bold mb-6">Give Your Feedback</h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md w-full max-w-lg"
        style={{ backgroundColor: theme === "dark" ? "#444444" : "#f2efe7" }}
      >
        <label className="block mb-2">Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border-b border-gray-600 outline-none bg-transparent"
          required
        />

        <label className="block mb-2">Your Feedback</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value.slice(0, maxCharacters))}
          maxLength={maxCharacters}
          className="w-full p-2 h-28 mb-4 border-b border-gray-600 outline-none bg-transparent"
          required
        ></textarea>
        <p className="text-sm text-gray-500 mb-4">
          {feedback.length}/{maxCharacters} characters
        </p>

        <div className="flex justify-end items-end">
          <button
            type="submit"
            className="px-6 py-3 cursor-pointer rounded-lg transition-transform disabled:opacity-50"
            style={{
              backgroundColor: theme === "dark" ? "#fff5ec" : "#333333", 
              color: theme === "dark" ? "#333333" : "#fff5ec"
            }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
