import SignUp from '@components/auth/SignUp'
import React from 'react'
import Link from 'next/link';

const signUp = () => {
    return (
        <>
          <br />
          <br />
          <SignUp /><br/><br/><br/>
          <h1 className='font-mono'>Already have an account?</h1>
          <Link href = "sign-in">
            <button
                type = "button"
                className="outline_btn"
            >
                Sign in now
            </button>
          </Link>
        </>
      );
}

export default signUp