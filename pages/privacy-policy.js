// pages/reset-password.tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_KEY'; // Use your public anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ResetPasswordPage() {
  const router = useRouter();
  const { access_token, type } = router.query; // Expecting ?access_token=XYZ&type=recovery
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Optionally, you can verify that the query parameter type equals 'recovery'
  useEffect(() => {
    if (type && type !== 'recovery') {
      setMessage('Invalid token type.');
    }
  }, [type]);

  async function handleReset() {
    if (!password) {
      setMessage('Please enter a new password.');
      return;
    }
    if (!access_token || typeof access_token !== 'string') {
      setMessage('Invalid or missing reset token.');
      return;
    }

    // 1) Convert token into a session
    const { data: sessionData, error: setSessionError } = await supabase.auth.setSession(access_token);
    if (setSessionError) {
      setMessage('Error setting session: ' + setSessionError.message);
      return;
    }

    // 2) Update user’s password
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage('Error updating password: ' + error.message);
    } else {
      setMessage('Password updated successfully! You may now log in with your new password.');
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h1>Reset Password</h1>
      {access_token ? (
        <>
          <p>Please enter your new password.</p>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          <button
            onClick={handleReset}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#00C9FF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Reset Password
          </button>
          {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
        </>
      ) : (
        <p>Invalid or missing reset token.</p>
      )}
    </div>
  );
}
