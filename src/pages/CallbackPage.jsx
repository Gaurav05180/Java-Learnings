import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (!code) {
        alert('No authorization code found!');
        return;
      }

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_AUTH_SERVER_URL}/token`,
          new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: import.meta.env.VITE_CLIENT_REDIRECT_URI,
            client_id: 'college-client',
            // client_secret: 'xyz'  // Only if required
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const { access_token, id_token } = response.data;

        // Store token (for demo, localStorage used)
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('id_token', id_token);

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Token request failed', error);
        alert('Failed to get token.');
      }
    };

    fetchToken();
  }, [navigate]);

  return <p>Logging you in...</p>;
}

export default CallbackPage;
