import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './views/routes'
import { Helmet } from 'react-helmet';
import { ICONS } from './constants/icons';

function App() {
    useEffect(() => {
        // Setup local storage
    
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', null)
        }
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', null)
        }
    }, [])

    return (
        <BrowserRouter>
            <Helmet>
                <title>Volunteer connection</title>
            </Helmet>

            {/* <AuthProvider> */}
            
                <AllRoutes />
            {/* </AuthProvider> */}
        </BrowserRouter>
    )
}

export default App
