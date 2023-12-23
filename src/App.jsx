import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";
import { useEffect } from "react";

function App() {
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        console.log("token first", token);
    });
    const isAuth = Boolean(useSelector((state) => state.auth.token));

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
