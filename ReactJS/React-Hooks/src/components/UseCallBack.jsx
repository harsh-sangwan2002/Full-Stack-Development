import React, { useState } from 'react'
import Search from './Search';

const allUsers = [
    "john",
    "alex",
    "george",
    "simon",
    "james"
]

const shuffle = (array) => {
    const shuffledArray = [...array]; // Make a copy of the array to avoid mutating the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray;
}

function UseCallBack() {

    const [users, setUsers] = useState(allUsers);

    const handleSearch = (text) => {

        const filteredUsers = allUsers.filter(user => user.includes(text));
        setUsers(filteredUsers);
    }

    return (
        <div className='container'>
            <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
            <Search onChange={handleSearch} />
            <ul>
                {
                    users.map((user, idx) => <li key={idx}>{user}</li>)
                }
            </ul>
        </div>
    )
}

export default UseCallBack
