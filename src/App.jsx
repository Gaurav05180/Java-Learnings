import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/Dashboard';
// import Noticeboard from './pages/Noticeboard';
// import Profile from './pages/Profile';
// import Unauthorized from './pages/Unauthorized';
import CallbackPage from './pages/CallbackPage';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Dashboard />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callbackPage" element={<CallbackPage />} /> {/* Root handles auth callback */}
      {/* <Route path="/noticeboard" element={<Noticeboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/unauthorized" element={<Unauthorized />} /> */}
    </Routes>
  );
}

export default App;
