import React from 'react'

function Item({ idx, item, removeItem }) {

    console.log("Item re-rendered");

    return (
        <div>
            <li key={idx}>{item}</li>
            <button onClick={() => removeItem(item)}>Remove</button>
        </div>
    )
}

export default React.memo(Item);
