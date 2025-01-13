import React, { useEffect, useState } from 'react'

function GetData() {

    const [data, setData] = useState(null);
    console.log("Position 1");

    function fn() {

        async function fetchData() {

            try {

                console.log("useEffect is working.");

                const data = await fetch('https://api.github.com/users/harsh-sangwan2002');
                const res = await data.json();
                setData(res);

                console.log(res);
            } catch (err) {
                console.log(err);
            }

        }
        fetchData();
    }

    useEffect(fn,[])

    console.log("Position 2");

    return (
        <>
            {
                data == null ?
                    <>
                        <h2>Loading important data...</h2>
                    </> :
                    <>
                        <h1>Data Loaded</h1>
                    </>
            }
        </>
    )
}

export default GetData
