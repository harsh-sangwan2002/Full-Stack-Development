import React from 'react'
import Child from './Child'

function Parent({ familyInfo }) {
    return (
        <div>
            I am parent component
            <Child familyInfo={familyInfo} />
        </div>
    )
}

export default Parent
