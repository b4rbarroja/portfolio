"use client";

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
  Eye,
  EyeOff,
} from "lucide-react";

type Contact = {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  read: boolean;
  createdAt: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

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

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
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

  const handleToggleRead = async (id: string) => {
    try {
      const res = await authFetch(`/api/contact/${id}/read`, {
        method: "PATCH",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const updated = await res.json();
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, read: updated.read } : m)),
      );
    } catch (err) {
      console.error(err);
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

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center">
              <Inbox className="w-5 h-5 text-black/60" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black" >
              Messages
            </h1>
          </div>
          {!loading && !error && (
            <span className="flex items-center gap-1.5 text-sm text-black/60 bg-white border border-black/10 rounded-full px-4 py-1.5">
              <Mail className="w-3.5 h-3.5" />
              {messages.length}
              {unreadCount > 0 && (
                <span className="ml-1 text-blue-600 font-medium">
                  ({unreadCount} unread)
                </span>
              )}
            </span>
          )}
        </div>

        {loading && (
          <div className="flex items-center gap-2 text-black/40 mb-6">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Loading messages...</span>
          </div>
        )}

        {loading && (
          <div className="max-w-3xl space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-white border border-black/10 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="max-w-xl flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-red-600">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="max-w-xl flex flex-col items-center gap-3 bg-white border border-black/10 rounded-2xl px-6 py-12 text-center text-black/40">
            <MessageSquareText className="w-8 h-8" />
            <p className="text-sm" >No messages yet.</p>
          </div>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="max-w-3xl space-y-3">
            {messages.map((msg) => {
              const isOpen = openId === msg.id;
              return (
                <div
                  key={msg.id}
                  className={`bg-white border rounded-2xl px-5 py-4 transition-colors hover:border-black/30 ${
                    msg.read ? "border-black/10" : "border-blue-300 bg-blue-50/30"
                  }`}
                >
                  <div
                    className="flex items-start justify-between gap-4 cursor-pointer"
                    onClick={() => setOpenId(isOpen ? null : msg.id)}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`font-semibold ${msg.read ? "text-black" : "text-black"}`}>
                          {msg.name}
                        </span>
                        {!msg.read && (
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                        )}
                        <span className="flex items-center gap-1 text-sm text-black/40 truncate">
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          {msg.email}
                        </span>
                      </div>
                      <p
                        className={`text-sm text-black/60 mt-2 ${
                          isOpen ? "" : "line-clamp-1"
                        }`}
                      >
                        {msg.message}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-black/40 whitespace-nowrap">
                        <Clock className="w-3 h-3" />
                        {formatDate(msg.createdAt)}
                      </span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleRead(msg.id);
                          }}
                          className={`transition-colors ${
                            msg.read ? "text-black/30 hover:text-blue-600" : "text-blue-600 hover:text-blue-800"
                          }`}
                          aria-label={msg.read ? "Mark as unread" : "Mark as read"}
                        >
                          {msg.read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(msg.id);
                          }}
                          className="text-red-400 hover:text-red-600 transition-colors"
                          aria-label="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <ChevronDown
                          className={`w-4 h-4 text-black/30 transition-transform ${
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
      </div>
    </main>
  );
}
