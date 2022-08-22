import React from 'react';
import { useQuery } from '@tanstack/react-query';

import axios from './../axios/axios';
import { Usercard } from './../organisms/Organisms';

const UsersList = () => {
  const {
    isLoading: isUsersLoading,
    error,
    data: users,
    isSuccess,
  } = useQuery(
    ['users'],
    () =>
      axios.get(`${window.location.origin}/api/v1/users`).catch((error) => {
        console.error(error.response.data);
      }),
    {
      cacheTime: 0,
      staleTime: Infinity,
    }
  );
  if (isUsersLoading) return 'Loading...Loading...Loading...Loading...';
  console.log(users);
  return (
    <>
      <h2>Users</h2>
      {users.data.data.map((user, index) => (
        <Usercard
          key={index}
          id={user.attributes.id}
          name={user.attributes.name}
          following={user.attributes.following}
        />
      ))}
    </>
  );
};
export default UsersList;
