import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import DeleteUser from './DeleteUser';

const Details = ({ userData }) => {
  return (
    <>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Detail</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Id</Td>
            <Td> {userData.loginUser.user.id}</Td>
          </Tr>
          <Tr>
            <Td>First name</Td>
            <Td>{userData.loginUser.user.firstName}</Td>
          </Tr>
          <Tr>
            <Td>Last Name</Td>
            <Td> {userData.loginUser.user.lastName}</Td>
          </Tr>
          <Tr>
            <Td>Email</Td>
            <Td> {userData.loginUser.user.email}</Td>
          </Tr>
        </Tbody>
      </Table>

      <DeleteUser identifier={userData.loginUser.user.id} />
    </>
  );
};

export default Details;
