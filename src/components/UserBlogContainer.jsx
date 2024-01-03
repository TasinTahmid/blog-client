/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "./BlogCard";

const UserBlogContainer = ({ id }) => {
    const dispatch = useDispatch();
    const [userBlogList, setUserBlogList] = useState([]);

    // const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(`http://localhost:5000/api/v1/users/${id}/blogs`, {
                headers: {
                    Accept: "application/json",
                },
            });
            const blogs = response.data;
            setUserBlogList(blogs);
        };
        id && fetchBlogs();
    }, []);

    return (
        <div
            className="bg-gray-100 relative overflow-hidden w-full h-full bg-white  py-10 px-auto  
            flex justify-center"
        >
            <div className="w-2/3 grid grid-cols-2 gap-y-12 gap-x-14 justify-items-center">
                {userBlogList.map((blog) => {
                    return <BlogCard blog={blog} key={blog.id} />;
                })}
            </div>
        </div>
    );
};

export default UserBlogContainer;
