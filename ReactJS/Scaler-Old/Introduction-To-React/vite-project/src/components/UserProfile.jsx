import React from 'react'

function UserProfile({ name, age, location }) {

    // props.name = "Harsh"; // This will not work as props are read-only
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default UserProfile
