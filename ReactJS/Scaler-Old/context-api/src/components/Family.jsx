import React, { useContext } from 'react'
import Parent from './Parent'
import FamilyContext from '../context/FamilyContext'

function Family() {

    const familyInfo = useContext(FamilyContext);
    
    return (
        <div className='family'>
            <h1>I am family component</h1>
            <h2>{familyInfo.familyName}</h2>
            <Parent />
        </div>
    )
}

export default Family
