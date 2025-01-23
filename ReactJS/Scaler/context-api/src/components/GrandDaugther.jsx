import React from 'react'

function GrandDaugther({ familyInfo }) {
    return (
        <div>
            I am grand daugther component. {familyInfo.onlyForGrandChildren()}
        </div>
    )
}

export default GrandDaugther
