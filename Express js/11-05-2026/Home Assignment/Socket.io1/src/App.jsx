import { useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";
import ConversationPanel from "./components/ConversationPanel";
import Sidebar from "./components/Sidebar";
import { chats, initialMessages } from "./chatData";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:3000";

function buildMessage(roomId, message) {
  return {
    id: `${roomId}-${message.timestamp}-${message.id}`,
    authorId: message.id,
    authorName: message.authorName || "Guest",
    text: message.text,
    timestamp: message.timestamp,
  };
}

export default function App() {
  const socketRef = useRef(null);
  const typingTimerRef = useRef(null);
  const messageListRef = useRef(null);

  const [selectedChatId, setSelectedChatId] = useState(chats[0].id);
  const [draft, setDraft] = useState("");
  const [onlineCount, setOnlineCount] = useState(1);
  const [status, setStatus] = useState("Connecting");
  const [connectionError, setConnectionError] = useState("");
  const [typingState, setTypingState] = useState({ roomId: null, authorName: "" });
  const [messagesByChat, setMessagesByChat] = useState(initialMessages);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === selectedChatId) || chats[0],
    [selectedChatId]
  );

  const selectedMessages = messagesByChat[selectedChat.id] || [];
  const typingLabel = typingState.roomId === selectedChat.id ? `${typingState.authorName} is typing...` : "";

  useEffect(() => {
    const socket = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setStatus("Connected");
      setConnectionError("");
    });

    socket.on("disconnect", () => {
      setStatus("Disconnected");
    });

    socket.on("connect_error", (error) => {
      setStatus("Offline");
      setConnectionError(error.message || "Unable to connect to chat server");
    });

    socket.on("user_count", (count) => {
      setOnlineCount(count);
    });

    socket.on("system_message", () => {
      setConnectionError("");
    });

    socket.on("chat_message", (message) => {
      const roomId = message.roomId || "general";

      setMessagesByChat((current) => {
        const roomMessages = current[roomId] || [];

        return {
          ...current,
          [roomId]: [...roomMessages, buildMessage(roomId, message)],
        };
      });
    });

    socket.on("typing", ({ roomId, authorName, isTyping }) => {
      setTypingState((current) => {
        if (isTyping) {
          return { roomId, authorName };
        }

        return current.roomId === roomId ? { roomId: null, authorName: "" } : current;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const node = messageListRef.current;

    if (node) {
      node.scrollTop = node.scrollHeight;
    }
  }, [selectedMessages, selectedChatId]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  function emitTyping(isTyping) {
    socketRef.current?.emit("typing", {
      roomId: selectedChat.id,
      authorName: "You",
      isTyping,
    });
  }

  function handleSendMessage() {
    const text = draft.trim();

    if (!text) {
      return;
    }

    socketRef.current?.emit("chat_message", {
      roomId: selectedChat.id,
      authorName: "You",
      text,
    });

    emitTyping(false);
    setDraft("");
  }

  function handleDraftChange(event) {
    const value = event.target.value;

    setDraft(value);
    emitTyping(Boolean(value.trim()));

    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }

    typingTimerRef.current = setTimeout(() => emitTyping(false), 1200);
  }

  return (
    <div className="app-shell">
      <div className="chat-frame">
        <Sidebar
          chats={chats}
          selectedChatId={selectedChatId}
          onlineCount={onlineCount}
          onSelectChat={setSelectedChatId}
        />

        <ConversationPanel
          chat={selectedChat}
          messages={selectedMessages}
          status={status}
          typingLabel={typingLabel}
          connectionError={connectionError}
          messageListRef={messageListRef}
          draft={draft}
          onDraftChange={handleDraftChange}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}