import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CandidateRoute = () => {
    const { account } = useAuth();

    if (account && account.role === 1) {
        return <Outlet />;
    } else {
        return <Navigate to="/user-homepage" />;
    }
};

export default CandidateRoute;
