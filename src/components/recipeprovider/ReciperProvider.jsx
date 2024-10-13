import { createContext, useState } from "react"
// Crear contexto global
// eslint-disable-next-line react-hooks/rules-of-hooks
let infoContext = createContext();

// Crear componente proveedor del contexto
const ReciperProvider = ({children}) => {
    let [infoRecipes, setInfoRecipes] = useState("hola");
  return (
    <infoContext.Provider value={{infoRecipes, setInfoRecipes}}>
        {/* Componente hijo que se utilzara el contexto */}
        {children}
    </infoContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export {infoContext, ReciperProvider}