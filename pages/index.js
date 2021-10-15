import Head from 'next/head';
import React, { useState } from 'react';
import { HomeLayout } from '../layout/HomeLayout';
import { Tabs, Box, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Details from '../components/Details';
import SignInForm from '../forms/SignInForm';
import SignUpForm from '../forms/SignUpForm';

const index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <HomeLayout>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box w={['89%', '100%']}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Details</Tab>
            <Tab>Edit </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Details />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </HomeLayout>
  );
};

export default index;
