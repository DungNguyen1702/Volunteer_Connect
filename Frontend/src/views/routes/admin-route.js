import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const AdminRoute = () => {
    const { account } = useAuth()

    if (account.role === 3) {

       return <Outlet />
        
    } else {
        return <Navigate to="/homepage" />
    }
}

export default AdminRoute
