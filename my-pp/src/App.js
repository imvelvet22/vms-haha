import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import Records from './Pages/Records';
import Calendar from './Pages/Calendar';
import Login from './components/Login/Login.jsx';
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi";

const AppContent = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && (
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>
      )}

      {!isLoginPage && <Navbar show={showNav} />}

      <div className='main'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/records" element={<Records />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
