// app/progs/UserList.js

import React from 'react';
import Link from 'next/link';


const userList = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Alan Turing' },
  { id: 3, name: 'Grace Hopper' },
  { id: 4, name: 'Dennis Ritchie' },
  { id: 5, name: 'Linus Torvalds' },
];

export default function UserList() {
  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {/* <Link
              href={`/progs/programador/${user.id}`}> */}
              {user.name}
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}