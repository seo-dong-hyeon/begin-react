import React , { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'test1',
        email: 'test1@gmail.com'
    },
    {
        id: 2,
        username: 'test2',
        email: 'test2@gmail.com'
    },
    {
        id: 3,
        username: 'test3',
        email: 'test3@gmail.com'
    },
  ];

  const nextId = useRef(4); // id가 바뀌어도 컴포넌트가 리렌더링 될 필요는 없음 -> useState x, useRef
  const onCreate = () => {
    nextId.current += 1; // 컴포넌트가 리렌더링 되더라도 바뀐 값이 유지
  }

  return (
    <UserList users={users} />
  );
}

export default App;
