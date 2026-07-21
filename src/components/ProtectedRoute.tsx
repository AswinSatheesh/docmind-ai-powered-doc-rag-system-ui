import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute =()=>{
        
    // const isAuthenticated = true;

    // 2. Extract the live isAuthenticated state from your AuthContext global store
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        // 🚷 Not logged in? Redirect them to the login screen immediately.
        // The 'replace' prop ensures they can't click the browser "Back" button to return here.
        return <Navigate to="/login" replace />
    }
    
    // ✅ Authenticated? Let them pass through to the requested page layout window!
    return <Outlet />
};