import { Children, createContext,useState } from "react";

let UserContext = createContext();

// const userProvider=userContext.Provider;
// export {userProvider};

export const UserProvider = ({children})=>{
     let [user,setUser]=useState();
    const[cartitems,setCartItems]=useState([]);
    const [total,setTotal]=useState(0);

    return <UserContext.Provider value={{user,setUser,cartitems,setCartItems,total,setTotal}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;