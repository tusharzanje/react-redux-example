import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ADD_ITEMS } from "../state/reducers/actiontypes";

export const ItemList = () => {
    const items = useSelector(state => state.itemsRed.items);
    const dispatch = useDispatch();

    const [newItem, setNewItem] = useState('');

    const handlerAddItem = () => {
        dispatch({ type: ADD_ITEMS, payload: { id: Date.now(), name: newItem } });
        setNewItem('');
    }

    const handleRemoveItem = (itemId) => {
        dispatch({ type: REMOVE_ITEM, payload: itemId })
    }

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {
                    items.map(item => {
                        return (<li key={item.id}>{item.name}
                            <button onClick={() => { handleRemoveItem(item.id) }}>Remove Item</button>
                        </li>)
                    })
                }
            </ul>
            <div>
                <input type="text"
                    value={newItem} onChange={e = setNewItem(e.targer.value)}
                    placeholder="Enter some Item name" />
                <button onClick={handlerAddItem}>Add Item</button>
            </div>
        </div>
    )
}