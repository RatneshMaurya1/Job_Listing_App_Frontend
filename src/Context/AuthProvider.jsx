import {Children, createContext, useContext, useState ,useEffect} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const logIn = () => setIsLoggedIn(true)
    const logOut = () => setIsLoggedIn(false)

    useEffect(() => {
        // Check for JWT token in cookies on initial load
        const token = Cookies.get('token'); // replace 'token' with your cookie's name
        console.log(token)
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return(
        <AuthContext.Provider value={{isLoggedIn,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = () => useContext(AuthContext)