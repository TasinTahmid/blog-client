import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleBlog from "../components/SingleBlog";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
    const { state } = useLocation();
    const { id } = useParams();
    console.log(id);

    const [blog, setBlog] = useState({});
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
    useEffect(() => {
        const fetchBlog = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/v1/blogs/${id}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            setBlog(response.data);
            setTime(response.data.createdAt.split("T")[0]);
            console.log(response.data.createdAt.split("T")[0]);
        };
        fetchBlog();
    }, []);
    return (
        <div className="overflow-y-scroll h-full">
            <SingleBlog blog={blog} isUserBlogList={state.isUserBlogList} />
        </div>
    );
};

export default BlogDetails;
