import {createContext, useContext, useState ,useEffect} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const logIn = () => setIsLoggedIn(true)
    const logOut = () => setIsLoggedIn(false)

    useEffect(() => {
        const token = Cookies.get('token'); 
        console.log(token)
        if (token) {
            setIsLoggedIn(true);
        }else{
            localStorage.removeItem("name")
            localStorage.removeItem("userId")
        }
    }, []);

    return(
        <AuthContext.Provider value={{isLoggedIn,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => useContext(AuthContext)