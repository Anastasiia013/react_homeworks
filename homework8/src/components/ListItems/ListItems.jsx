import { useState, useEffect } from "react";

const ListItems = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addItem() {
        if (inputValue.trim() !== "") {
            setItems((prevItems) => [...prevItems, inputValue]);
            setInputValue("");
        }
    }

    useEffect(() => {
        console.log("Компонент ListItems обновлен");
    }, []);

    return (
        <div>
            <input type="text" id="element" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="button" onClick={addItem}>Добавить элемент</button>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default ListItems;