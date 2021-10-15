import React from 'react';
import { DELETE_USER } from '../api';
import { useMutation } from '@apollo/client';
import { Button } from '@chakra-ui/react';
import { Loading, Failure } from './LoadingStates';

const DeleteUser = ({ identifier }) => {
  const [deleteExistingUser, { error, loading }] = useMutation(DELETE_USER);

  const onSubmit = async () => {
    try {
      await deleteExistingUser({ variables: { input: { identifier } } });
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  if (loading) return <Loading loading={loading} />;
  if (error) return <Failure error={error} />;

  return (
    <div>
      <Button
        colorScheme="pink"
        variant="solid"
        type="submit"
        onClick={onSubmit}
      >
        Delete User {identifier}
      </Button>
    </div>
  );
};

export default DeleteUser;
