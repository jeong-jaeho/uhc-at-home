"use client";

import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      });
    }
  return (
    <div className='font-mono flex-center'>
        <form onSubmit={handleSignIn}>
            <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
            className="form_input"
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            required
            className="form_input"
          />
        </form>
        <button type="submit" className='black_btn'>
            Log In
        </button>
    </div>
  )
}

export default SignIn