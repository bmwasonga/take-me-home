import React from 'react';
import {
  chakra,
  useToast,
  Box,
  Flex,
  Button,
  useColorModeValue,
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
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { useMutation } from '@apollo/client';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Loading, Success, Failure } from '../components/LoadingStates';
import { CREATE_USER } from '../api';
import SignInForm from '../forms/SignInForm';
import Head from 'next/head';

const SignUpForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [login, { data, error, loading }] = useMutation(CREATE_USER);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login({ variables: { input: { ...data } } });
      console.log(data);
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  if (loading) return <Loading loading={loading} />;
  if (error) return <Failure error={error} />;
  if (data) return <SignInForm />;

  console.log('sign in', data);

  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta property="og:title" content="Sign up" key="title" />
      </Head>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Join us!</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            w={[400, 500]}
          >
            <chakra.form
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              rounded={[null, 'md']}
              overflow={{ sm: 'hidden' }}
            >
              <Stack px={4} py={5} p={[null, 6]} spacing={6}>
                <FormControl isInvalid={errors.firstName}>
                  <FormLabel htmlFor="firstName">FIrst Name</FormLabel>
                  <Input
                    autoComplete="off"
                    variant="flushed"
                    p="2"
                    {...register('firstName', {
                      required: 'firstName is required',
                      minLength: {
                        value: 3,
                        message:
                          'First name should be at least 3 characters long',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.lastName}>
                  <FormLabel htmlFor="lastName">Second Name</FormLabel>
                  <Input
                    id="lastName"
                    variant="flushed"
                    p="2"
                    {...register('lastName', {
                      required: 'Secnd name is required',
                      minLength: {
                        value: 3,
                        message:
                          'Second name should be at least 3 characters long',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.lastName && errors.lastName.message}
                  </FormErrorMessage>
                </FormControl>

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
                        if (!validator.isEmail(value))
                          return 'Email is invalid';
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

                <Button colorScheme="blue" type="submit">
                  Sign up
                </Button>
                <Stack>
                  <Link href="/">
                    <a>Already a member? </a>
                  </Link>
                  <Spacer />
                </Stack>
              </Stack>
            </chakra.form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default SignUpForm;
