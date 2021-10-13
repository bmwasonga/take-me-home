import Head from 'next/head';
import React from 'react';
import { Details } from '../components/Details';
import { HomeLayout } from '../layout/HomeLayout';

const index = () => {
  return (
    <HomeLayout>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Details />
    </HomeLayout>
  );
};

export default index;
