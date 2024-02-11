import { Navigate } from "react-router-dom";
import {useAuth} from '../Context/AuthContext'
const RequireAuth = ({ children }) => {
    const {authenticated} = useAuth();

    if (!authenticated) {
        return <Navigate to='/admin' />
    }

    return children;
}

export {RequireAuth};