import React from 'react';
import {
  chakra,
  Text,
  Box,
  Flex,
  Button,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  InputRightElement,
  InputGroup,
  Stack,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import validator from 'validator';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../api';

const SignUpForm = () => {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data, error, loading }] = useMutation(LOGIN_USER);

  const onSubmit = async (data) => {
    try {
      await login({ variables: { input: { ...data } } });
      router.push('/');
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  console.log('this is what we are to get', data);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Welcome Back!</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          w={[400, 500]}
        >
          <chakra.form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            rounded={[null, 'md']}
            overflow={{ sm: 'hidden' }}
          >
            <Stack px={4} py={5} p={[null, 6]} spacing={6}>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  variant="flushed"
                  p="2"
                  {...register('email', {
                    required: 'Email address is required',
                    validate: (value) => {
                      if (!validator.isEmail(value)) return 'Email is invalid';
                    },
                  })}
                />

                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    id="password"
                    type={show ? 'text' : 'password'}
                    variant="flushed"
                    p="2"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 6',
                      },
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button w="full" colorScheme="blue" type="submit">
                Sign up
              </Button>
              <Stack>
                <Link href="/signup">
                  <a>Don't have a account? </a>
                </Link>
              </Stack>
            </Stack>
          </chakra.form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUpForm;
