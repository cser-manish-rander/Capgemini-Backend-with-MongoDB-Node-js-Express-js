export default function Sidebar({ chats, selectedChatId, onlineCount, onSelectChat }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div>
          <p className="eyebrow">Pulse Chat</p>
          <h1>Conversations</h1>
        </div>
        <div className="presence-pill">{onlineCount} online</div>
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input type="text" placeholder="Search chats" aria-label="Search chats" />
      </div>

      <div className="chat-list">
        {chats.map((chat) => {
          const isActive = chat.id === selectedChatId;

          return (
            <button
              key={chat.id}
              className={`chat-row ${isActive ? "active" : ""}`}
              type="button"
              onClick={() => onSelectChat(chat.id)}
            >
              <div className="avatar">{chat.avatar}</div>
              <div className="chat-row-copy">
                <div className="chat-row-top">
                  <strong>{chat.name}</strong>
                  <span>{chat.status}</span>
                </div>
                <p>{chat.preview}</p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}