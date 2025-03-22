import React, { useContext } from 'react'
import FamilyContext from '../context/FamilyContext';

function GrandDaugther() {

    const familyInfo = useContext(FamilyContext);

    return (
        <div>
            I am grand daugther component. {familyInfo.onlyForGrandChildren()}
        </div>
    )
}

export default GrandDaugther
