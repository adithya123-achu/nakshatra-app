import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SendHorizontal } from "lucide-react";
import { askAstrologer } from "../services/aiChatService";

const AIChatPage = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "🙏 Namaste! I am Nakshatra AI. Ask me anything about your birth chart, career, marriage, finance, health or today's horoscope.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!question.trim() || loading) return;

    const currentQuestion = question.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const answer = await askAstrologer(currentQuestion);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            err?.response?.data?.message ||
            "Sorry, I couldn't answer right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0918] text-white flex flex-col">

      <div className="bg-[#17132f] p-6 flex justify-between items-center shadow-lg">

        <div>
          <h1 className="text-3xl font-bold text-orange-400">
            🤖 Nakshatra AI
          </h1>

          <p className="text-gray-400">
            Personal Astrology Assistant
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl"
        >
          ← Dashboard
        </button>

      </div>

      <div className="flex-1 overflow-y-auto p-8">

        <div className="max-w-5xl mx-auto space-y-6">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-3xl rounded-2xl px-6 py-4 whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-orange-500"
                    : "bg-[#1c1838]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex">
              <div className="bg-[#1c1838] rounded-2xl px-6 py-4 animate-pulse">
                Nakshatra AI is thinking...
              </div>
            </div>
          )}

          <div ref={bottomRef}></div>

        </div>

      </div>

      <div className="p-6 bg-[#17132f]">

        <div className="max-w-5xl mx-auto flex gap-4">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask anything about your horoscope..."
            disabled={loading}
            className="flex-1 bg-[#242040] rounded-xl px-5 py-4 outline-none disabled:opacity-50"
          />

          <button
            onClick={sendMessage}
            disabled={loading || !question.trim()}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 rounded-xl transition"
          >
            <SendHorizontal />
          </button>

        </div>

      </div>

    </div>
  );
};

export default AIChatPage;