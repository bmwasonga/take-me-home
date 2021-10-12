import React from 'react';
import Head from 'next/head';

import SignUpForm from '../forms/SignUpForm';

const signup = () => {
  return (
    <div>
      <Head>
        <title>Sign up</title>
        <meta property="og:title" content="Sign up" key="title" />
      </Head>

      <SignUpForm />
    </div>
  );
};

export default signup;
