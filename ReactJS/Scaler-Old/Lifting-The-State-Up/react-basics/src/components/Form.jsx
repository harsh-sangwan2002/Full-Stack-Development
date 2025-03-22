import React, { useState } from 'react'

function Form() {

    // A state variable is an advanced variable which stores the value of the input field.
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <label>
                Age:
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
        </>
    )
}

export default Form
