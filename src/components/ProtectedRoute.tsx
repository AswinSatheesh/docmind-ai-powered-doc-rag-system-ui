import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute =()=>{
        
    // 🔐 Simulation: In Phase 4, we will read this token dynamically from our AuthContext/LocalStorage.
    // Change this to 'false' to test the guard blocking access!
    const isAuthenticated = false;

    if(!isAuthenticated){
        // 🚷 Not logged in? Redirect them to the login screen immediately.
        // The 'replace' prop ensures they can't click the browser "Back" button to return here.
        return <Navigate to="/login" replace />
    }
    
    // ✅ Authenticated? Let them pass through to the requested page layout window!
    return <Outlet />
};