import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
/**
 * @returns 입력한 문자 메시지가 유효한 경우(예를 들어 길이가 3 글자 이상인 경우) 
 * 입력 필드 아래에 "Valid message" 라는 텍스트가 표시됩니다. 
 * 유효하지 않은 경우(즉, 3 글자보다 짧은 경우) "Invalid message"라는 텍스트가 표시되어야 합니다.
 */

export default function App() {
    const [message, setMessage] = useState("");
    const [text, setText] = useState("Invalid");
    
    function writeMsg(event) {
        const value = event.target.value; // 입력값 가져오기
        setMessage(value); // 메시지 업데이트

        if (value.trim().length < 3) {
            setText('Invalid');
        } else {
            setText('Valid');
        }
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={writeMsg} />
            <p>{text} message</p>
        </form>
    );
}