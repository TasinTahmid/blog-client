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
            className="bg-gray-100 relative overflow-hidden w-full h-full bg-white  py-10 px-auto  
            flex justify-center"
        >
            <div className="w-2/3 grid grid-cols-2 gap-y-12 gap-x-14 justify-items-center">
                {blogList.map((blog) => {
                    return <BlogCard blog={blog} key={blog.id} />;
                })}
            </div>
        </div>
    );
};

export default BlogContainer;
