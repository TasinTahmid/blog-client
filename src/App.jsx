import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "./pages/Login";
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
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/home"
                    element={isAuth ? <HomePage /> : <Navigate to="/" replace={false} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
