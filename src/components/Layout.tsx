import { Link, Outlet } from "react-router-dom";

export const Layout =() =>{
    return(
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily:'sans-serif'}}>
            {/* App Header Bar */}
            <header style={{background: '#1e293b',color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{ margin: 0 }}>🧠 DocMind</h2>
                <nav style={{display: 'flex', gap: '2rem'}}>
                    <Link to='/' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</Link>
                    <Link to='/login' style={{color : '#cbd5e1', textDecoration: 'none'}}>Login</Link>
                    <Link to='/register' style={{color: '#cbd5e1', textDecoration:'none'}}>Register</Link>
                </nav>
            </header>

            {/* Main Screen Content View Area */}
            <main style={{flex: 1, padding: '2rem', background: '#f8fafc'}}>
                <Outlet/>
            </main>
        </div>
    );
};