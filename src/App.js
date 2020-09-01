import React , { useRef, useState, useMemo, useCallback } from 'react';
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
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]); // inputs가 바뀔 때만 함수가 생성(원래는 계속 새로 생성) -> 안 바뀌면 기존의 함수 재사용 -> 최적화

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
  
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users => users.concat(user)); // 최신 parameter 조회 -> []에 값을 안 넣어도 됨 
                                           // 업데이트 된 컴포넌트만 렌더링      
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1; 
  }, [username, email]); 
  
  /* 처음 만들때만, 업데이트 시에만 렌더링 -> 이후에 값이 안 변할 땐 재새용 */
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => 
      user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(user =>  
      user.id === id ? {...user, active: !user.active} : user)); 
  }, []);

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
