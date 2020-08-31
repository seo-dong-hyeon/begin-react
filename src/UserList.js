import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }){
    const { username, email, id, active } = user;
  
    useEffect(() => {
        console.log('user값이 설정', user);
        return () => {
            console.log('user값이 바뀌기 전', user);
        }
    }, [user]); 
    
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