import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from '@mui/material';

interface User {
  id: number;
  name: string;
  age: number;
}

export const Section1=()=> {
  const [users, setUsers] = useState<User[]>([]);

  const params = {
    id: 1,
    name: 'taro',
    email: 'taro@example.com'
  };

  const handleClick=() => {
    debugger;
    const fetchUsers = async () => {
        axios.post('http://localhost:8080/users', params)
        .then(response => {
          console.log(response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.error(error);
        });
        
        debugger;

    };

    fetchUsers();
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Button sx={{bgcolor:"#ff0000"}} onClick={handleClick}>click</Button>
    </div>
  );
}
