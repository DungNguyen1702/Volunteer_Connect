import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './views/routes'

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
            {/* <AuthProvider> */}
                <AllRoutes />
            {/* </AuthProvider> */}
        </BrowserRouter>
    )
}

export default App
