import React, { useContext } from 'react'
import Child from './Child'
import Context from './context'

function Parent1() {

    const { theme } = useContext(Context);
    console.log("Parent1");
    return (
        <div className={theme ? 'dark' : 'light'}>
            Parent1
            <Child />
        </div>
    )
}

export default Parent1
