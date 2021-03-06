import React, { useState, useRef } from 'react';

function InputSample(){    
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs; // name 값 = "name" or "nickname"

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs, // 기존 객체 복사
            [name]: value, // 덮어쓰기 -> 불변성 -> 객체상태 변경
        });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus(); // 선택하고 싶은 DOM
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            /> 
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange}
                value={nickname} 
            /> 
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;