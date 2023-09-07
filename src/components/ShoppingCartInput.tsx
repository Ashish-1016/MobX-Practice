import {observer} from "mobx-react";
import React, {useState} from "react";
import {IShoppingCart, IShoppingStore} from "../typings.ts";


function ShoppingCartInput({cartStore}:IShoppingStore){

    const [item,setItem]=useState<string>("")
    const {itemsList,addItem} = cartStore

    function handleAddItem(e:React.FormEvent){
        e.preventDefault()
        const newItem={
            id:Math.random()*100,
            name:item
        }
        addItem(newItem)
        setItem("")
    }

    return (
        <div>
            <h1>Cart Items:</h1>
            <input value={item} onChange={(e)=>setItem(e.target.value)} type='text' placeholder='Add Item'/>
            <button onClick={handleAddItem}>Add To Cart</button>

        </div>
    )
}
export default  observer(ShoppingCartInput)