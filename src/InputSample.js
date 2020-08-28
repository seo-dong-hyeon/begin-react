import React, {useState} from 'react';

function InputSample(){
    const [text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value); // 이벤트가 발생한 DOM
    };
    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} /> {/*상자안의 text 관리 -> 초기화 버튼 구현 시 상자 안의 내용도*/}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;