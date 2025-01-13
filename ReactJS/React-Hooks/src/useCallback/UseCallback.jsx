import React, { useCallback, useState } from 'react'
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

function UseCallback() {

    const [users, setUsers] = useState(allUsers);

    // memoized & freezes up with time
    const handleSearch = useCallback((text) => {

        // functions are different on every render by default
        const filteredUsers = allUsers.filter(user => user.includes(text));
        setUsers(filteredUsers);
    }, [users])

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

export default UseCallback
