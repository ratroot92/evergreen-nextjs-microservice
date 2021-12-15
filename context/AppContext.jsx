import { createContext } from 'react';
export const AppContext = createContext(null);
const AppProvider = ({ children }) => {
    const [store, setStore] = React.useState({
        
    })
    return (
        <AppContext.Provider value={{ store,setStore }}>
        {children}
        </AppContext.Provider >)
}

export default AppProvider