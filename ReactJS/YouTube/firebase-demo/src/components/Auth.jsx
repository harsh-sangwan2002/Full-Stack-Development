import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const resgiter = async () => {

        const res = await auth.createUserWithEmailAndPassword(email, password);
        console.log(res);
    }

    const login = async () => {
        const user = await auth.signInWithEmailAndPassword(email, password);
        console.log(user);
    }

    const logout = async () => {
        await auth.signOut();
    }

    useEffect(() => {

        const unsub = auth.onAuthStateChanged(user => {
            setUser(user);
        })

        return () => {
            unsub();
        }
    })

    return (
        <div>
            <>
                {
                    user == null ?
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="password"></label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            {/* <button onClick={register}>Register</button> */}
                            <button onClick={login}>Login</button>
                        </div> :
                        <div>
                            <h1>{user.email} </h1>
                            <h2>{user.uid}</h2>
                            <button onClick={logout}>Logout</button>
                        </div>
                }
            </>
        </div>
    )
}

export default Auth
