import ShoppingCartInput from "../components/ShoppingCartInput.tsx";
import ItemCard from "../components/ItemCard.tsx";

export default function Home({cartStore}){

    return(
    <div>
        <h3>Shopping Cart Store:</h3>
        <a href='/items'>View All items</a>
        <ShoppingCartInput cartStore={cartStore} />
        <ItemCard cartStore={cartStore} />
    </div>
    )
}