import {IShoppingCart} from "../typings.ts";
import React from "react";
import {observer} from "mobx-react";


function List({cartStore}){

    const {itemsList,removeItem}=cartStore

    console.log(itemsList)
    function handleRemoveItem(e:React.FormEvent,id:number){
        e.preventDefault()
        removeItem(id)
        console.log(itemsList)
    }

    return(
        <section>
            <h1>All Cart Items</h1>
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

export default observer(List)