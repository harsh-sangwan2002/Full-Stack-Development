import { useCallback, useState } from 'react'

const ItemList = () => {

    const [item, setItem] = useState(["Item 1", "Item 2", "Item 3"]);

    const removeItem = useCallback((idx) => {
        setItem((prevItems) => {
            return prevItems.filter((_, index) => index !== idx);
        });
    }, []);

    return (
        <div>
            <ul>
                {
                    item.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item}</h1>
                                <button onClick={() => removeItem(index)}>Remove</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ItemList
