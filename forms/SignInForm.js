import React from 'react';
import {
  chakra,
  Center,
  Box,
  Button,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  InputRightElement,
  InputGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignInForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box bg="tomato" w="100%" h="100%" p={4} minW="inherit">
      {/* find a way to center this container */}
      <Center h="100%">
        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{ base: 'initial', md: 'grid' }}
            columns={{ md: 3 }}
            spacing={{ md: 6 }}
          >
            <GridItem colSpan={{ md: 1 }}>
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                  Sign Up
                </Heading>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, 'md']}
                overflow={{ sm: 'hidden' }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg={useColorModeValue('white', 'gray.700')}
                  spacing={6}
                >
                  <FormControl isInvalid={errors.firstName}>
                    <FormLabel htmlFor="firstName">FIrst Name</FormLabel>
                    <Input
                      autocomplete="off"
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

                  <FormControl isInvalid={errors.secondName}>
                    <FormLabel htmlFor="secondName">Second Name</FormLabel>
                    <Input
                      id="secondName"
                      variant="flushed"
                      p="2"
                      {...register('secondName', {
                        required: 'Secnd name is required',
                        minLength: {
                          value: 3,
                          message:
                            'Second name should be at least 3 characters long',
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {errors.secondName && errors.secondName.message}
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
                            value: 6,
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

                  <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor="password2">Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="password2"
                        type={show ? 'text' : 'password'}
                        variant="flushed"
                        p="2"
                        {...register('password2', {
                          required: 'Password is required',
                          minLength: {
                            value: 6,
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
                      {errors.password2 && errors.password2.message}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
  );
};

export default SignInForm;
