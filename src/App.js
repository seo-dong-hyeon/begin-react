import React , { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4); // id가 바뀌어도 컴포넌트가 리렌더링 될 필요는 없음 -> useState x, useRef
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]); // 기존 배열 복사 + 새로운 요소 추가 == user.concat(user)
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1; // 컴포넌트가 리렌더링 되더라도 바뀐 값이 유지
  }

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}  
      />
      <UserList users={users} />
    </> 
  );
}

export default App;
