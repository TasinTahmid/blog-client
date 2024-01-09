import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./app.css";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    const token = useSelector((state) => state.auth.token);

    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
