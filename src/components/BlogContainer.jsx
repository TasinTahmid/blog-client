import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
    const dispatch = useDispatch();
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(
                "http://localhost:5000/api/v1/blogs",
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            const blogs = response.data;
            setBlogList(blogs);
            console.log("blogs", blogs);
        };
        fetchBlogs();
    }, []);

    return (
        <div
            className="w-full mt-2  bg-white shadow-lg p-5 w-3/4 rounded-b-lg
            grid grid-cols-2 gap-4"
        >
            {blogList.map((blog, idx) => {
                return <BlogCard blog={blog} key={blog.id} />;
            })}
        </div>
    );
};

export default BlogContainer;
