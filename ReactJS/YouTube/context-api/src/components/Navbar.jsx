import React, { useContext } from 'react'
import Context from './context'

function Navbar() {

    const { theme } = useContext(Context);
    console.log("Navbar");
    return (
        <div className={theme ? 'dark' : 'light'}>
            Navbar
        </div>
    )
}

export default Navbar
