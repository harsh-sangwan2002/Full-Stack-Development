import React, { useEffect, useState } from 'react'

function UseEffect3() {

    const [count, setCount] = useState(0);
    const [txt, setTxt] = useState({ msg: '' })

    useEffect(() => {
        console.log('useEffect');
        document.title = `You clicked ${count} times`;
    }, [count])

    let changeText = (e) => {
        txt.msg = e.target.value;
        setTxt({ ...txt })
    }

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input type="text" value={txt.msg} onChange={(e) => changeText(e)} />
        </div>
    )
}

export default UseEffect3
