import SignIn from '@components/auth/SignIn'
import React from 'react'
import Link from "next/link";

const signIn = () => {
    return (
        <>
          <br />
          <br />
          <SignIn /><br/><br/><br/>
          <h1 className='font-mono'>New to UHC@Home?</h1>
          <Link href = "sign-up">
            <button
                type = "button"
                className="outline_btn"
            >
                Create Account
            </button>
          </Link>
        </>
      );
}

export default signIn