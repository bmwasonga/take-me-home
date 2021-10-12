import { Container } from '@chakra-ui/layout';
import React from 'react';
import { Stack, Flex, Box, useColorModeValue, Heading } from '@chakra-ui/react';

export const HomeLayout = ({ children }) => {
  return (
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.700')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} pos="absolute" top={[2, 6]}>
            Welcome user
          </Heading>
        </Stack>
        <Stack spacing={4} direction="column" align="center">
          {children}
        </Stack>
      </Stack>
    </Flex>
  );
};
