import React, { useEffect, useState } from 'react'

function GetData() {

    const [data, setData] = useState(null);
    console.log("Position 1.");

    function fn() {
        async function fetchData() {
            console.log("useEffect is working.");

            const res = await fetch("https://api.github.com/users/harsh-sangwan2002");
            const user = await res.json();
            console.log(user);

            setData(user);
        }
        fetchData();
    }

    useEffect(() => {
        fn();
    }, [])

    console.log("Position 2.");

    return (
        <div>
            {
                data == null ? <h1>Placeholder is loading the data...</h1> :
                    <div>
                        <h1>Data loaded successfully</h1>
                        <h2>{data.name}</h2>
                        <h2>{data.bio}</h2>
                        <h2>{data.type}</h2>
                    </div>
            }
        </div>
    )
}

export default GetData
