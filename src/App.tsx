
import './App.css'
import {RouterContext, RouterView} from "mobx-state-router";
import {viewMap} from "./viewMap.tsx";
import {initRouter} from "./initRouter.ts";


function App(){

    const routerStore= initRouter()

  return (
   <RouterContext.Provider value={routerStore}>
       <RouterView viewMap={viewMap} />
   </RouterContext.Provider>
  )
}

export default App
