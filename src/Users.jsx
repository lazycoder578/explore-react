import React, { useEffect, useState } from 'react'
import User from './User';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

  return (
    <div>
        <h2>Users: {users.length}</h2>
       {
        users.map(user => <User user = {user}/>)
       }
    </div>
  )
}
//https://jsonplaceholder.typicode.com/users