"use client"

import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setError(null);
      } else {
        throw new Error('Unable to send email.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <h1 style={{fontWeight: "bold"}}>For any queries or feedback, please send us an email here!</h1><br/>
      {isSent ? (
        <p>Email sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className=''>
          {error && <p>Error: {error}</p>}
          <label htmlFor="name">Name:</label><br/>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form_input"
          /><br />

          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form_input"
          /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            className="form_input"
          ></textarea><br />

          <button type="submit" disabled={isSending} className='black_btn'>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;