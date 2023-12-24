import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./app.css";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import { useEffect } from "react";
import Profile from "./pages/Profile";

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
                <Route path="/blogs/:id" element={<SingleBlog />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
