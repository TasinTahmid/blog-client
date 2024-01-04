import axios from "axios";
import BlogContainer from "../components/BlogContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBlogs } from "../states/blogSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get("http://localhost:5000/api/v1/blogs", {
                headers: {
                    Accept: "application/json",
                },
            });
            dispatch(setBlogs(response.data));
        };
        fetchBlogs();
    }, []);
    return (
        <div className="auto">
            <BlogContainer />
        </div>
    );
};

export default Home;
