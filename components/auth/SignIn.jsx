"use client";

import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("Welcome back" + userCredential.name);
      }).catch((error) => {
        console.log(error);
        alert(error);
        setPassword("");
      });
    }
  return (
    <div>
      <h1 className='font-mono flex-center'>Sign in here</h1><br/>
        <form onSubmit={handleSignIn} className='font-mono'>
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
            Sign In
          </button>
        </form>
    </div>
  );
}

export default SignIn