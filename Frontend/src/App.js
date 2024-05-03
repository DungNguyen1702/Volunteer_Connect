import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllRoutes from './views/routes'
import { Helmet } from 'react-helmet';
import { ICONS } from './constants/icons';
import Navbar from './components/Navbar';
import Introduce from './views/routes/Introduce';
import About from './views/routes/About';
import Service from './views/routes/Service';
import Contact from './views/routes/Contact';
/*
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
*/
//    return (
//        <BrowserRouter>
//            <Helmet>
//                <title>Volunteer connection</title>
//            </Helmet>

            // {/* <AuthProvider> */}
            // 
                // <AllRoutes />
            // {/* </AuthProvider> */}
        // </BrowserRouter>
        // 
    // )
// }
// 
// export default App
export default function App() {
    return (
        <div className ="App">
            <Routes>
                <Route path = "/" element = {<Introduce/>}/>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/service" element = {<Service/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
            </Routes>
                      
        </div>
    )}