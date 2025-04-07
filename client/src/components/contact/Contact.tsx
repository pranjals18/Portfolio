// import { motion, useInView } from "framer-motion";
// import { useContext, useRef, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ThemeContext } from "../context/ThemeContext";

// const Contact = () => {
//   const contactRef = useRef(null);
//   const isInView = useInView(contactRef, { once: true });

//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const {theme} = useContext(ThemeContext);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!firstName.trim() || !email.trim() || !message.trim()) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("https://portfolio-o8ve.onrender.com/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: firstName, email, message }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send message.");
//       }

//       toast.success("Message sent successfully! We'll get back to you soon.");
//       setFirstName("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       console.error("Error submitting message:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="contact" ref={contactRef} className="mx-12 pt-24 pb-52">
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         style={{ padding: "10px" }}
//         toastStyle={{ padding: "15px" }}
//       />
      
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.1 }}
//         className="flex text-4xl font-semibold justify-center items-center mb-24"
//       >
//         Contact Me
//       </motion.h1>

//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="md:w-1/2 mb-8 md:mb-0"
//         >
//           <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
//           <p className="mb-4">
//             Have some big ideas and need a brand or a website? Then please reach
//             out, we would love to hear more about you, your project, and how we
//             can help!
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="md:w-1/2"
//         >
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <label className="mb-2">First Name</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="p-2 mb-4 border-b border-gray-600 outline-none bg-transparent"
//               required
//             />

//             <label className="mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-2 mb-4 border-b border-gray-600 outline-none bg-transparent"
//               required
//             />

//             <label className="mb-2">Message</label>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="p-2 mb-4 border-b border-gray-600 outline-none bg-transparent h-24"
//               required
//             ></textarea>

//             <motion.button
//               // whileHover={{ scale: 1.03 }}
//               type="submit"
//               className={`flex justify-center items-center gap-3 cursor-pointer p-4 rounded-xl  mx-auto md:mx-0 transition-transform disabled:opacity-50 hover:scale-103 ${ theme === "dark" ? " bg-[#fff5ec] text-[#333333]" : "bg-[#333333] text-[#fff5ec]"} `}
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "SUBMIT"}
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;














import { motion, useInView } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { theme } = useContext(ThemeContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://portfolio-o8ve.onrender.com/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: firstName, email, message }),
      });

      if (!response.ok) throw new Error("Failed to send message.");

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFirstName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      ref={contactRef}
      className="px-4 sm:px-8 md:px-12 lg:px-24 pt-24 pb-46 max-w-7xl mx-auto"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ padding: "10px" }}
        toastStyle={{ padding: "15px" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-semibold mb-12 text-center"
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Talk</h2>
          <p className={`text-base sm:text-lg leading-relaxed ${theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"}`}>
            Have some big ideas and need a brand or a website? Then please reach
            out—we’d love to hear more about you, your project, and how we can
            help!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-1/2"
        >
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <label className="mb-1 text-sm sm:text-base">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 mb-4 border-b border-gray-600 outline-none bg-transparent text-sm sm:text-base"
              required
            />

            <label className="mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 mb-4 border-b border-gray-600 outline-none bg-transparent text-sm sm:text-base"
              required
            />

            <label className="mb-1 text-sm sm:text-base">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 mb-4 border-b border-gray-600 outline-none bg-transparent text-sm sm:text-base h-32 resize-none"
              required
            />

            <motion.button
              type="submit"
              className={`w-full sm:w-fit px-6 py-3 rounded-xl font-medium transition-transform duration-200 disabled:opacity-50 hover:scale-105 mx-auto md:mx-0 ${
                theme === "dark"
                  ? "bg-[#fff5ec] text-[#333333]"
                  : "bg-[#333333] text-[#fff5ec]"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "SUBMIT"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
