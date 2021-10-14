import React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

const Details = () => {
  const data = localStorage.getItem('data');

  console.log('My data', data);

  return (
    <Box>
      <Flex>
        <Text fontSize="3xl" as="em" p="2">
          a
        </Text>
        <Text fontSize="3xl" p="2">
          b
        </Text>
      </Flex>
    </Box>
  );
};

export default Details;
