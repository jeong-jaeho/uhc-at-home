"use client";

import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("Signed Up");
      }).catch((error) => {
        console.log(error);
        alert("Failed to Signed Up");
      });
    }
  return (
    <div>
      <h1 className='font-mono flex-center'>Sign up here</h1><br/>
        <form onSubmit={handleSignUp} className='font-mono'>
          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form_input"
          />

          <label htmlFor="Password">Password:</label><br/>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form_input"
          />
          <br />

          <button type="submit" className='black_btn'>
            Sign Up
          </button>
        </form>
    </div>
  );
}

export default SignUp;