import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}){
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />) // index값 말고 별도의 key값으로
                )
            }
        </div>
    );
}

export default UserList;