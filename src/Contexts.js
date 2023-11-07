import { createContext, useState } from "react"

export const StateManager = createContext()

export function StateProvider({children}){
    const [ mainNavigation, setMainNavigation ] = useState(0)
    const [ ordersDrawer, setOrdersDrawer ] = useState(0)

    return(
        <StateManager.Provider value={{ mainNavigation, setMainNavigation, ordersDrawer, setOrdersDrawer}}>
            {children}
        </StateManager.Provider>
    )
}