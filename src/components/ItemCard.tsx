import {observer} from "mobx-react";
import {IShoppingCart} from "../typings.ts";
import React from "react";

function ItemCard({cartStore}){

    const {itemsList,removeItem}=cartStore
    function handleRemoveItem(e:React.FormEvent,id:number){
        e.preventDefault()
        removeItem(id)
    }

    return (
<section>
    {
        itemsList.map((item:IShoppingCart)=>{
            return(
                <h3 key={item.id}>ID:{item.id} <br/>
                    {item.name}
                    <button onClick={(e)=>handleRemoveItem(e,item.id)}>Remove Item</button>
                </h3>
            )
        })
    }
</section>
    )
}

export default observer(ItemCard)