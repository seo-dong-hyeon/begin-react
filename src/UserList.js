import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }){
    const { username, email, id, active } = user;
    /*useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);*/
    useEffect(() => {
        console.log('user값이 설정', user);
        return () => {
            console.log('user값이 바뀌기 전', user);
        }
    }, [user]); // [] 값이 렌더링되거나 업데이트 될 때 -> 클리너 함수 호출 -> 본 함수 호출 
                // 함수 내부에서 사용 시 반드시 []에 값을 넣어줘야 함
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
               }}
               onClick={() => onToggle(id)}>
                {username}
            </b> 
            &nbsp;
            <span>
                ({email})
            </span>
            &nbsp;
            <button onClick={() => onRemove(id)}>
                삭제
            </button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }){
    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />) 
                )
            }
        </div>
    );
}

export default UserList;