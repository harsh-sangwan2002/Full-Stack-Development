import { useState } from 'react'

function AdvanceForm() {

    const [formData, setFormData] = useState({ name: "", email: "", password: "", age: "" });

    const handleChange = (e) => {

        const { name, value } = e.target;

        switch (name) {
            case "name":
                setFormData({ ...formData, name: value });
                console.log(formData);
                break;
            case "email":
                setFormData({ ...formData, email: value });
                console.log(formData);
                break;
            case "password":
                setFormData({ ...formData, password: value });
                console.log(formData);
                break;

            case "age":
                setFormData({ ...formData, age: value });
                console.log(formData);
                break;
            default:
                console.log(formData);
                break;
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: '1rem', width: "300px", margin: "auto" }}>
            <label>
                Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label> <label>
                Email: <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password: <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Age: <input type="text" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <button type='submit' onClick={handleChange}>Submit</button>
        </div>
    )
}

export default AdvanceForm
