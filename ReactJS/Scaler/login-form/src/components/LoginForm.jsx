import React, { useRef, useState } from 'react'

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let userNameRef = useRef();
    let passwordRef = useRef();

    const handleLogin = () => {
        // console.log('UserName:', userName);
        // console.log('Passowrd: ', password);
        console.log('UserName:', userNameRef.current.value);
        console.log('Passowrd: ', passwordRef.current.value);
    }

    return (
        <div>
            <div>
                <h1>Login Form</h1>
                {userName} {password}
            </div>
            <div>
                <input type="text" ref={userNameRef} placeholder='Enter username' />
                <input type="text" ref={passwordRef} placeholder='Enter password' />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default LoginForm
