import HeaderContext from "../context/HeaderContext";
import React from 'react';
function ContextWrapper({children,navigation}){
    const [menuItems] = React.useState(navigation);

    return (
        <HeaderContext.Provider value={{menuItems}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper