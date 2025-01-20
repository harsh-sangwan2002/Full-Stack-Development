import { useState, useEffect } from "react"

export default function FetchData() {

    const [data, setData] = useState(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log('error', error))

        return () => {
            console.log('cleanup')
        }
    }, []) // oncly runs on mounting

    return (
        <div>
            {
                data ? <>
                    <h1>Users</h1>
                    <ul>
                        {data.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </> : <>
                    <h1>...Fetching Data</h1>
                </>
            }
        </div>
    )
}