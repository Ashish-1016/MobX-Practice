import {useRouterStore} from "mobx-state-router";


function Item(){

    const routerStore = useRouterStore();
    const { params } = routerStore.routerState;

    return(
        <section>
            <h1>ID:{params.id}</h1>
            <h1>CartItem:</h1>
            <a href='/'>Home</a>
        </section>

    )
}

export default Item