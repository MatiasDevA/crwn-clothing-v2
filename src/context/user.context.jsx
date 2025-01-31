import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";


//como el valor actual que queres acceder
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser : () => null,
});

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const value = { currentUser, setCurrentUser}

    useEffect(() => {
      const unsubcribe =  onAuthStateChangedListener((user) => {
          if(user){
            createUserDocumentFromAuth(user)
          }
            setCurrentUser(user)
       }) 
       return unsubcribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}