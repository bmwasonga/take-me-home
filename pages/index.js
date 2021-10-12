import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';

const index = () => {
  return (
    <div className={styles.container}>
      <h1>If you can see this you have been signed in okay</h1>
    </div>
  );
};

export default index;
