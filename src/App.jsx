import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./app.css";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";

function App() {
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        console.log("token first", token);
    });

    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/blogs/:id" element={<SingleBlog />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create-blog" element={<CreateBlog />} />
                    <Route path="/update-blog" element={<UpdateBlog />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
