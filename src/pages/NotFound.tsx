import { useNavigate } from "react-router-dom";

const NotFound =()=>{
    const navigate = useNavigate();
    return(
        <div style={{padding : '2rem', textAlign: 'center'}}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for doesn't exist.</p>
            <button onClick={()=> navigate('/')}>Go to dashboard</button>
        </div>
    );
}

export default NotFound;