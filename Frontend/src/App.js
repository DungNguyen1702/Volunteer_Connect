import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./views/routes";
import { AuthProvider } from "./contexts/AccountContext";

function App() {
    useEffect(() => {
        // Setup local storage

        if (!localStorage.getItem("token")) {
            localStorage.setItem("token", null);
        }
        if (!localStorage.getItem("account")) {
            localStorage.setItem("account", null);
        }
    }, []);

    return (
        <BrowserRouter>
            <AuthProvider>
                <AllRoutes />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
