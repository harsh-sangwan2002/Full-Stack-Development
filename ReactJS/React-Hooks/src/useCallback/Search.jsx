import React, { memo } from 'react'

function Search({ onChange }) {

    console.log("Search rendered");
    return (
        <input
            type='text'
            placeholder='Search users...'
            onChange={(e) => onChange(e.target.value)}
        />

    )
}

// Wraps the component & intercepts the render of the component & checks if the props are different
export default memo(Search)