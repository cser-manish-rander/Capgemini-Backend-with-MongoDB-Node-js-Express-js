import './RoutePage.css';

export default function RoutePage({ title, text }) {
  return (
    <main className="route-page">
      <div className="route-card">
        <p className="route-kicker">Dynamic Route</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </main>
  );
}