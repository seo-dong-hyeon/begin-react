import React , { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function counterActiveUsers(users){
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length; // 조건 통과 배열 길이 == 조건 만족하는 원소 수
}

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
        email: 'test1@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'test2',
        email: 'test2@gmail.com',
        active: false,
    },
    {
        id: 3,
        username: 'test3',
        email: 'test3@gmail.com',
        active: false,
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
  
  const onRemove = id => {
    setUsers(users.filter(user => // 조건을 만족하는 값들만 통과 -> user 업데이트
      user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(user =>  // 조건을 만족하는 값들만 업데이트
      user.id === id ? {...user, active: !user.active} : user)); // 기존의 값 + 덮어쓰기 -> 특정 객체 업데이트
  }

  // users가 바뀔때만 호출 -> 아닐때는 이전의 값을 그대로 사용
  const count = useMemo(() => counterActiveUsers(users), [users]); 

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}  
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </> 
  );
}

export default App;
