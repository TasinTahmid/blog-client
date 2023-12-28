import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
    const dispatch = useDispatch();
    const [blogList, setBlogList] = useState([]);
    console.log("render blog container.");
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get("http://localhost:5000/api/v1/blogs", {
                headers: {
                    Accept: "application/json",
                },
            });
            const blogs = response.data;
            setBlogList(blogs);
            console.log("blogs", blogs);
        };
        fetchBlogs();
    }, []);

    return (
        <div
            className="relative overflow-hidden w-full h-full bg-white  py-6 px-12  
            grid grid-cols-2 gap-10 shadow-2xl"
        >
            {blogList.map((blog) => {
                return <BlogCard blog={blog} key={blog.id} />;
            })}
        </div>
    );
};

export default BlogContainer;
