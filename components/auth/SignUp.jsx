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
    <div className='font-mono flex-center'>
        <form onSubmit={handleSignUp}>
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
            Sign Up
        </button>
    </div>
  )
}

export default SignUp;