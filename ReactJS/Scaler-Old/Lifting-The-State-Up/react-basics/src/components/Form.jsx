import { useState } from 'react'

function Form() {

    // A state variable is an advanced variable which stores the value of the input field.
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: '1rem', width: "300px", margin: "auto" }}>
            <label>
                Name: <input type="text" value={name} onChange={handleChange} />
            </label>
            <label>
                Age: <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <label>
                Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
        </div>
    )
}

export default Form
