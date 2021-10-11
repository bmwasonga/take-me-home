import React from 'react';
import SignInForm from '../forms/SignInForm';
import Head from 'next/head';

const Signin = () => {
  return (
    <div>
      <Head>
        <title>Signin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SignInForm />
    </div>
  );
};

export default Signin;
