import { observer } from "mobx-react";
import React, { useState } from "react";

function ShoppingCartInput({ cartStore} ) {
    const [item, setItem] = useState<string>("");
    const [id, setId] = useState<number | string>("");
    const [updatedItem, setUpdatedItem] = useState<string>("");
    const {itemsList ,addItem, updateItem } = cartStore;

    function handleAddItem(e: React.FormEvent) {
        if (item === "") {
            alert("Item can't be empty");
        } else {
            e.preventDefault();
            const newItem = {
                id: (Math.random() * 100).toFixed(),
                name: item,
            };
            addItem(newItem);
            console.log(itemsList)
            setItem("");
        }
    }

    function handleUpdateItem(e: React.FormEvent) {
        e.preventDefault();
        if (!id || !updatedItem) {
            alert("Add missing fields");
        } else {

            updateItem(Number(id), updatedItem);
            console.log(itemsList)
            setId("");
            setUpdatedItem("");
        }
    }

    return (
        <div>
            <h2>Add to Cart</h2>
            <input
                value={item}
                onChange={(e) => setItem(e.target.value)}
                type="text"
                placeholder="Add Item"
            />
            <button onClick={handleAddItem}>Add To Cart</button>
            <section>
                <h2>Update Item</h2>
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="number"
                    placeholder="ID for item"
                />
                <input
                    value={updatedItem}
                    onChange={(e) => setUpdatedItem(e.target.value)}
                    type="text"
                    placeholder="Add updated value"
                />
                <button onClick={handleUpdateItem}>Update Item</button>
            </section>
        </div>
    );
}

export default observer(ShoppingCartInput);
