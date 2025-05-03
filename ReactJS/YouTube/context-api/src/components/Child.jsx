import React, { memo } from 'react'

function Child() {

    console.log("Child");
    return (
        <div>
            Child
        </div>
    )
}

export default memo(Child)
