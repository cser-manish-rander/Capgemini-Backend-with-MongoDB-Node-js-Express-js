import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RoutePage from './components/RoutePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route
          path="/about"
          element={
            <RoutePage
              title="About Us"
              text="We build clean, responsive shopping experiences with a bright sale-focused layout, simple navigation, and reusable React components."
            />
          }
        />
        <Route
          path="/shop"
          element={
            <RoutePage
              title="Shop"
              text="This is the shop page. In a real project, this section would list products, prices, and add-to-cart actions."
            />
          }
        />
        <Route
          path="/login"
          element={
            <RoutePage
              title="Login"
              text="This login page can later connect to authentication, form validation, and user account access."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
