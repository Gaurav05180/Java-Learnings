// LoginButton.jsx
import React from 'react';

function LoginButton() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5173/login';
  };

  return (
    <button onClick={handleLogin}>
      Click here to Login
    </button>
  );
}

export default LoginButton;
