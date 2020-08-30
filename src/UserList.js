import React from 'react';

function User({ user, onRemove }){
    const { username, email, id} = user;
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            {/* () =>을 해서 인자로 받은 함수를 호출하는 모양x */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }){
    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                        />) 
                )
            }
        </div>
    );
}

export default UserList;