import React, { useContext } from 'react'
import Context from './context'

function Parent2() {

    const { theme } = useContext(Context);
    console.log("Parent2");
    return (
        <div className={theme ? 'dark' : 'light'}>
            Parent2
        </div>
    )
}

export default Parent2
