// src/App.jsx
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';

const InitialRedirect = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user && !['/login', '/signup'].includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  if (user && ['/login', '/signup'].includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return null;
};

function AppContent() {
  const { user } = useAuth();
  return (
    <div className="app">
      <Header />
      <InitialRedirect />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <Hero id="hero"/>
                <Products id="menu"/>
                <About id="about"/>
                <Testimonials id="testimonials"/>
                <Contact id="contact"/>
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Cart />
      </main>
      {user && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;