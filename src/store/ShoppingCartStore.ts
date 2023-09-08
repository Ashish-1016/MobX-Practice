import {action, makeObservable, observable} from "mobx";
import {IShoppingCart} from "../typings.ts";


export class ShoppingCart {

    items:IShoppingCart[]= [];
    constructor() {
        makeObservable(this,{
            items:observable
        })
    }
    addItem = action((newItem:IShoppingCart) => {
         this.items.push(newItem)
    });


    removeItem = action((id:number) => {
        this.items = this.items.filter((item) => item.id !== id);
    });

    updateItem = action((id: number, newName: string) => {
        this.items = this.items.map((item) =>
            item.id === id ? { ...item, name: newName } : item
        );

    });

    get itemsList(){
        return this.items
    }

}