export default function Composer({ chatName, draft, onDraftChange, onSendMessage }) {
  return (
    <footer className="composer">
      <button type="button" className="icon-button" aria-label="Attach file">
        +
      </button>
      <textarea
        rows="1"
        value={draft}
        onChange={onDraftChange}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            onSendMessage();
          }
        }}
        placeholder={`Message ${chatName}`}
      />
      <button type="button" className="send-button" onClick={onSendMessage}>
        Send
      </button>
    </footer>
  );
}