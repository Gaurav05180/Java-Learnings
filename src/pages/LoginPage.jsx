import React from 'react';

function LoginPage() {
  const handleLogin = () => {
    const authUrl = `${import.meta.env.VITE_AUTH_SERVER_URL}/authorize` +
      `?response_type=code` +
      `&client_id=college-client` +
      // `&redirect_uri=${encodeURIComponent(import.meta.env.VITE_CLIENT_REDIRECT_URI)}` +
      `&redirect_uri=${import.meta.env.VITE_CLIENT_REDIRECT_URI}` +
      `&scope=openid%20profile%20roles`;

    window.location.href = authUrl;
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    title: {
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>College Noticeboard Portal</h2>
      <button onClick={handleLogin} style={styles.button}>
        Login with Gaurav's Authverse
      </button>
    </div>
  );
}

export default LoginPage;
