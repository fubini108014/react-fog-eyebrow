import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return (
            <Navigate to="/maintain/login" state={{ from: location }} replace />
        );
    }

    return children;
}
