import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`https://portfolio-o8ve.onrender.com/messages`);
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data: Message[] = await response.json();

        // Sort messages by createdAt in descending order (latest first)
        const sortedMessages = data.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setMessages(sortedMessages);
      } catch (err) {
        setError("Error fetching messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div
      className="min-h-screen py-8 mx-12"
    >
      <h1
        className="text-3xl font-bold mb-6 flex justify-center items-center"
        style={{ color: theme === "dark" ? "#fff5ec" : "#333333" }}
      >
        Admin Messages
      </h1>

      {loading ? (
        <p style={{ color: theme === "dark" ? "#fff5ec" : "#333333" }}>
          Loading messages...
        </p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : messages.length === 0 ? (
        <p style={{ color: theme === "dark" ? "#fff5ec" : "#333333" }}>
          No messages found.
        </p>
      ) : (
        <div
          className="shadow-md rounded-lg p-6"
          style={{ backgroundColor: theme === "dark" ? "#555" : "#f2efe7" }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ color: theme === "dark" ? "#fff5ec" : "#333333" }}>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b"
                  style={{ color: theme === "dark" ? "#fff5ec" : "#333333" }}
                >
                  <td className="p-3 align-top">{msg.name}</td>
                  <td className="p-3 align-top">{msg.email}</td>
                  <td className="p-4">{msg.message}</td>
                  <td className="p-3">{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;