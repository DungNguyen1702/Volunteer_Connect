import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const OrganizationRoute = () => {
    const { account } = useAuth()

    if (account.role === 2) {

       return <Outlet />
        
    } else {
        return <Navigate to="/homepage" />
    }
}

export default OrganizationRoute
