export interface IShoppingCart {
    id:number,
    name:string
}

export interface IShoppingStore {
    items:IShoppingCart[],
    addItem:(newItem:IShoppingCart)=>void
    removeItem:(id:number)=>void
    updateItem:(id:number,newItem:string)=>void
}

