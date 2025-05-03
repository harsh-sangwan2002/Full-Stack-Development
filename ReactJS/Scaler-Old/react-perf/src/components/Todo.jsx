import React, { useCallback, useState } from 'react'
import Item from './Item';

function Todo() {

    const [list, setList] = useState(['List 1', 'List 2', 'List 3']);
    const [todo, setTodo] = useState("");

    const removeItem = useCallback((itemToDelete) => {
        console.log("function invoked");
        const filteredList = list.filter(item => item != itemToDelete);
        setList(filteredList);
    }, []);

    console.log("Re-render todo");

    return (
        <div>
            <h1>Todo</h1>
            <div>
                <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
            </div>
            <ul>
                {
                    list.map((item, idx) => (
                        <Item key={idx} item={item} removeItem={removeItem} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
