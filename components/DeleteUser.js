import React from 'react';
import { DELETE_USER } from '../api';
import { useMutation } from '@apollo/client';
import { Button } from '@chakra-ui/react';

const DeleteUser = ({ identifier }) => {
  const [deleteExistingUser, { data, error, loading }] =
    useMutation(DELETE_USER);

  const onSubmit = async () => {
    try {
      await deleteExistingUser({ variables: { input: { identifier } } });
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  if (loading) return <Loading loading={loading} />;
  if (error) return <Failure error={error} />;
  if (data) return <Details userData={data} />;

  return (
    <div>
      <Button colorScheme="pink" variant="solid" onSubmit={onSubmit}>
        Delete User
      </Button>
    </div>
  );
};

export default DeleteUser;
