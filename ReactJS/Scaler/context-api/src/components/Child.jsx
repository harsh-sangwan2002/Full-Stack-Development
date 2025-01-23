import React from 'react'
import GrandSon from './GrandSon'
import GrandDaughter from './GrandDaugther'

function Child({ familyInfo }) {
    return (
        <div>
            I am child component
            <GrandSon familyInfo={familyInfo} />
            <GrandDaughter familyInfo={familyInfo} />
        </div>
    )
}

export default Child
