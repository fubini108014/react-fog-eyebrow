import React, { useEffect } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

function Logout() {
    let auth = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        auth.signout(() => navigate("/maintain/login"));
    }, [auth, navigate]);

    return <></>;
}

export default Logout;
