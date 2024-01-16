import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import ProfileSettings from "./pages/ProfileSettings";

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<ProfileSettings />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
