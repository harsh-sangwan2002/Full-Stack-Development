import React from 'react'
import Parent from './Parent'

function Family() {

    const familyInfo = {
        familyName: "The Griffin's family",
        onlyForParent: () => {
            return "Info for parents only"
        },
        onlyForGrandChildren: () => {
            return "Info for grand children only"
        }
    }

    return (
        <div className='family'>
            <h1>I am family component</h1>
            <h2>{familyInfo.familyName}</h2>
            <Parent familyInfo={familyInfo} />
        </div>
    )
}

export default Family
