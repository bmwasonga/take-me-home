import Head from 'next/head';
import React, { useState } from 'react';
import { HomeLayout } from '../layout/HomeLayout';
import { Tabs, Box, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Details from '../components/Details';
import SignInForm from '../forms/SignInForm';
import SignUpForm from '../forms/SignUpForm';

const index = () => {
  const [showForm, setShowForm] = useState(false);

  return <SignInForm />;
};

export default index;
