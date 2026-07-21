import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType{
    isAuthenticated : boolean,
    login : ()=> void,
    logout : ()=> void
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider =({children} : {children : ReactNode})=>{
    const[isAuthenticated,setIsAuthenticated] = useState<boolean>(true); //true means user authenticated - false means allow all routing
    const login = ()=> setIsAuthenticated(true);
    const logout = ()=> setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth =() =>{
    const context = useContext(AuthContext);

    if(!context){
        return new Error("useAuth must be used within an AuthProvider guard block");
    }
    return context;
}