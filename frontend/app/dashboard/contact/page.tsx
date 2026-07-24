"use client";

import { Outfit } from "next/font/google";
import { useEffect, useState } from "react";
import { authFetch } from "@/app/lib/authFetch";
import {
  Inbox,
  Mail,
  Trash2,
  Clock,
  AlertTriangle,
  Loader2,
  ChevronDown,
  MessageSquareText,
} from "lucide-react";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

type Contact = {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await authFetch("/api/contact");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load messages. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = confirm("Delete this message?");
    if (!confirmed) return;

    try {
      const res = await authFetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error(err);
      alert("Something went wrong while deleting.");
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section
        className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}
      >
        <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
              <Inbox className="w-5 h-5 text-blue-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Messages
            </h1>
          </div>
          {!loading && !error && (
            <span className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              {messages.length}
            </span>
          )}
        </div>

        {loading && (
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <Loader2 className="w-4 h-4 animate-spin" />
          </div>
        )}

        {loading && (
          <div className="max-w-3xl space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="max-w-xl flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-5 py-4 text-red-300">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="max-w-xl flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-12 text-center text-gray-400">
            <MessageSquareText className="w-8 h-8 text-gray-500" />
          </div>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="max-w-3xl space-y-4">
            {messages.map((msg) => {
              const isOpen = openId === msg.id;
              return (
                <div
                  key={msg.id}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 transition-colors hover:border-blue-400/30"
                >
                  <div
                    className="flex items-start justify-between gap-4 cursor-pointer"
                    onClick={() => setOpenId(isOpen ? null : msg.id)}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-white">
                          {msg.name}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-400 truncate">
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          {msg.email}
                        </span>
                      </div>
                      {msg.subject && (
                        <p className="text-sm text-blue-300 mt-1">
                          {msg.subject}
                        </p>
                      )}
                      <p
                        className={`text-sm text-gray-400 mt-2 ${
                          isOpen ? "" : "line-clamp-1"
                        }`}
                      >
                        {msg.message}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
                        <Clock className="w-3 h-3" />
                        {formatDate(msg.createdAt)}
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(msg.id);
                          }}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          aria-label="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
