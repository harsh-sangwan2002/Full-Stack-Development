import React from 'react'
import GrandSon from './GrandSon'
import GrandDaughter from './GrandDaugther'

function Child() {
    return (
        <div>
            I am child component
            <GrandSon />
            <GrandDaughter />
        </div>
    )
}

export default Child
