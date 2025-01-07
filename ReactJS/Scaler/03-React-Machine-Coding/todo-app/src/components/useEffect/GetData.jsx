import React, { useEffect, useState } from 'react'

function GetData() {
    const [data, setData] = useState([]);

    console.log("Before render");
    async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {
                console.log("During render")
            }
            {
                !data ? <h2>Loading....</h2> : <div>
                    <h2>Data arrived</h2>
                    <h2>{data.id}</h2>
                    <h2>{data.title}</h2>
                    <h2>{data.userId}</h2>
                </div>
            }

        </>
    )
}

export default GetData
