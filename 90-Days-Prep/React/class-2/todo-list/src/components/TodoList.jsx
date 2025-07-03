import React, { useState } from 'react'

const TodoList = ({ title }) => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const handleAdd = () => {
        setItems([...items, newItem]);
        setNewItem('');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 style={{ fontSize: '3rem' }}>{title}</h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <input value={newItem} onChange={handleChange} style={{ padding: '0.9rem', border: '1px solid grey', borderRadius: '5px', backgroundColor: 'transparent', color: 'white' }} type="text" placeholder='Enter your todo...' />
                <button onClick={handleAdd} style={{ padding: '0.9rem', width: '6rem', borderRadius: '5px', backgroundColor: 'transparent', border: '1px solid grey', color: 'white', cursor: 'pointer' }}>Add Todo</button>
            </div>
            <ul style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
                {
                    items.map((item, idx) =>
                        <li key={idx}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList
