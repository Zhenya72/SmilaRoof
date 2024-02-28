import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const RequierAuth = ({ children }) => {
    const { authenticated } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        if (!authenticated) {
            navigate('/admin');
        }
    }, [authenticated, navigate]);
    return authenticated ? <>{children}</> : null;
}

export { RequierAuth };


