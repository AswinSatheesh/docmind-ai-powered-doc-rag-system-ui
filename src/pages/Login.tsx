import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export const Login =() =>{
    // 1. Listen to our global Context tower to grab the login action
    const {login} = useAuth();
    // 2. Grab React Router's navigation tool to redirect pages
    const navigate = useNavigate();

    const[email,setEmail] =useState('');
    const[password,setPassword] = useState('');

    const handleSubmit =(e : React.SubmitEvent)=>{
        e.preventDefault(); //stop the page reload.

        if(!email || !password){
            alert("Please enter both email and password");
            return;
        }
        // 1. Flip global state: sets isAuthenticated to true
        login();

        // 2. Redirect: sends the user to the protected Dashboard route
        navigate('/');
    }
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
        }}>
            <form onSubmit={handleSubmit}
                style={{
                    background: 'white',
                    padding: '2.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
                >
                    <h2 style={{margin:'0',textAlign: 'center',color: '#1e293b'}}>Welcome Back</h2>
                    <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Login in to access your DocMind dashboard</p>
                {/* Email Input bound to email state */}
                <div 
                    style={{display: 'flex',flexDirection: 'column',gap: '0.5rem'}}>
                    <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Email Address</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="user@example.com"
                        style={{
                            padding: '0.625rem',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* Password Input bound to password state */}
                <div style={{
                    display :'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}> Password </label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{ 
                            padding: '0.625rem', 
                            borderRadius: '6px', 
                            border: '1px solid #cbd5e1',
                            outline: 'none'
                            }}
                    />
                </div>

                <button type="submit"
                    style={{
                        background: '#2563eb',
                        color: "white",
                        border: 'none',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginTop: '0.5rem'
                    }}
                >Sign In</button>
            </form>
        </div>
    );
}