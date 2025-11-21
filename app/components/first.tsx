"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<{ role: "user" | "Sarvesh"; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const chatBox = document.querySelector(".chat-box");
    chatBox?.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
  }, [chat]);
  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
   
    // Add user message immediately
    const newChat: { role: "user" | "Sarvesh"; content: string }[] = [...chat, { role: "user", content: input }];
    setChat(newChat);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ API expects "messages", not "message"
        body: JSON.stringify({
          messages: [
            ...newChat.map((c) => ({
              role: c.role === "user" ? "user" : "assistant",
              content: c.content,
            })),
          ],
        }),
      });

      const data = await res.json();
      console.log("Response received", data);
      // Append bot response
      setChat([...newChat, { role: "Sarvesh", content: data.reply || data.error || "Error" }]);
    } catch (err) {
      console.error(err);
      setChat([...newChat, { role: "Sarvesh", content: "⚠️ Something went wrong. Please try again." }]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold mb-4">💬 Sarvesh's AI Chatbot</h1>

      <div className="w-200 bg-white rounded shadow p-4">
        <div className="h-100 w-190 overflow-y-auto border p-3 rounded mb-3 text-sm chat-box">
         

          {chat.map((msg, i) => (
            <div
            key={i}
            className={`mb-3 ${
              msg.role === "user" ? "text-blue-600" : "text-gray-700"
            }`}
            >
              <strong>{msg.role === "user" ? "You:" : "Sarvesh:"}</strong>{" "}
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          ))}
          {loading && <p className="text-gray-400 italic">Thinking...</p>}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me something..."
            className="flex-1 border rounded px-3 py-2"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className={`rounded px-4 text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
