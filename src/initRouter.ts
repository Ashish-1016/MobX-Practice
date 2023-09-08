import {browserHistory, createRouterState, HistoryAdapter, RouterStore} from "mobx-state-router";

export const Routes=[
    {
        name:"Home",
        pattern:'/'
    },
    {
        name:'ItemList',
        pattern: '/items'
    },
    {
        name:'Item',
        pattern: '/items/:id'
    },
    {
    name: 'notFound',
        pattern: '/404'
    }
]

const notFound = createRouterState('notFound')


export function initRouter(){
    const routerStore = new RouterStore(Routes,notFound)

    const historyAdapter = new HistoryAdapter(routerStore,browserHistory)
    historyAdapter.observeRouterStateChanges()

    return routerStore
}