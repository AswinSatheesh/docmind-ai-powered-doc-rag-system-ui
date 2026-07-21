import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType{
    isAuthenticated : boolean,
    login : ()=> void,
    logout : ()=> void
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider =({children} : {children : ReactNode})=>{ //ReactNode : "extract children from the props object, and ensure that children is of type ReactNode (meaning it can be text, HTML tags, or other React components).
    const[isAuthenticated,setIsAuthenticated] = useState<boolean>(false); //true means user authenticated - false means allow all routing
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
        throw new Error("useAuth must be used within an AuthProvider guard block");
    }
    return context;
}