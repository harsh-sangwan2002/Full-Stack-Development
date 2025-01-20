import React, { useState } from 'react'

function AdvanceForm() {

    const [formData, setFormData] = useState({ name: "", email: "user@gmail.com", password: "", age: 0 });

    const handleChange = (e) => {

        const { name, value } = e.target;

        switch (name) {
            case "name":
                setFormData({ ...formData, name: value });
                break;
            case "email":
                setFormData({ ...formData, email: value });
                break;
            case "password":
                setFormData({ ...formData, password: value });
            case "age":
                setFormData({ ...formData, age: value });
                break;
            default:
                break;
        }
    }

    return (
        <>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label> <label>
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Age:
                <input type="text" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <hr />
        </>
    )
}

export default AdvanceForm
