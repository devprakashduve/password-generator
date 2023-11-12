import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider=({children}:any)=>{
const [data, setData]= useState({})

return (
    <UserContext.Provider value={{data, setData}}>
        {children}
    </UserContext.Provider>
)
}

export default UserContextProvider