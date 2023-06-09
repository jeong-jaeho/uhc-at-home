"use client";

import React, { useState } from 'react';
import SignIn from '@components/auth/SignIn'
import SignUp from '@components/auth/SignUp'
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import { Sign } from 'crypto';

const login = () => {
    return (
        <>
        <br/><br/><br/><br/><br/>
        <div className='flex gap-60'>
          <div className='w-full'>
            <SignIn></SignIn>
          </div>
          <div>
            <SignUp></SignUp>
          </div>
        </div>
        </>
      );
}

export default login