"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetField = () => {
    setEmail("");
    setMessage(""); 
    setSubject(""); 
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm("service_xf725qi", "template_2va15ao", e.target, "wH0cTcKyXxGeyTsgQ" )
    .then((result) => {
      console.log(result.text)
      alert("Email has been sent");
    }, (error) => {
      console.log(error.text)
    });
    resetField();
    e.target.reset();
  };

  return (
    <div>
      <h1 style={{fontWeight: "bold"}}>For any queries or feedback, please send us an email here!</h1><br/>
        <form onSubmit={handleSubmit} className=''>
          <label htmlFor="name">Name:</label><br/>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form_input"
          /><br />

          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form_input"
          /><br />

          <label htmlFor="subject">Subject:</label><br/>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="form_input"
          /><br />


          <label htmlFor="message">Message:</label><br />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            className="form_input"
          ></textarea><br />

          <button type="submit" className='black_btn'>
            Send
          </button>
        </form>
    </div>
  );
}

export default ContactForm;