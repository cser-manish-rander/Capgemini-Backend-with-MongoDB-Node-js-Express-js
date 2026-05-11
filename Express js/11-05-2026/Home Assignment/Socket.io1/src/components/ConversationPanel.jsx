import Composer from "./Composer";

export default function ConversationPanel({
  chat,
  messages,
  status,
  typingLabel,
  connectionError,
  messageListRef,
  draft,
  onDraftChange,
  onSendMessage,
}) {
  return (
    <main className="conversation-panel">
      <header className="conversation-header">
        <div className="profile-chip">
          <div className="avatar large">{chat.avatar}</div>
          <div>
            <strong>{chat.name}</strong>
            <p>{typingLabel || chat.status}</p>
          </div>
        </div>
        <div className="header-meta">
          <span>{status}</span>
        </div>
      </header>

      {connectionError ? <div className="connection-banner">{connectionError}</div> : null}

      <div className="message-scroller" ref={messageListRef}>
        <div className="day-divider">Today</div>
        {messages.map((message) => {
          const isMine = message.authorId === "me" || message.authorName === "You";

          return (
            <div key={message.id} className={`message-row ${isMine ? "mine" : "theirs"}`}>
              <div className={`bubble ${isMine ? "mine" : "theirs"}`}>
                {!isMine ? <span className="message-author">{message.authorName}</span> : null}
                <p>{message.text}</p>
                <time>{message.timestamp}</time>
              </div>
            </div>
          );
        })}
      </div>

      <Composer
        chatName={chat.name}
        draft={draft}
        onDraftChange={onDraftChange}
        onSendMessage={onSendMessage}
      />
    </main>
  );
}