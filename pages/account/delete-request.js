// pages/account/delete-request.js
import { useState } from 'react';
import Head from 'next/head';

export default function DeleteAccountRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setMessage('Your account deletion request has been submitted. We will contact you with further details.');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error || 'There was an issue processing your request.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('An unexpected error occurred while submitting your request.');
    }
  };

  return (
    <>
      <Head>
        <title>Request Account Deletion</title>
      </Head>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <h1>Request Account Deletion</h1>
        {submitted ? (
          <p>{message}</p>
        ) : (
          <>
            <p>
              If you wish to delete your account, please enter the email address associated with your account and submit your request.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email Address:</label>
                <br />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </div>
              <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                Submit Deletion Request
              </button>
            </form>
            {message && <p>{message}</p>}
          </>
        )}
      </div>
    </>
  );
}
