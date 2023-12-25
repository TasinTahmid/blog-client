import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "./BlogCard";

const UserBlogContainer = () => {
    const dispatch = useDispatch();
    const [userBlogList, setUserBlogList] = useState([]);

    const { id } = useSelector((state) => state.auth.user);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/v1/users/${id}/blogs`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            const blogs = response.data;
            setUserBlogList(blogs);
            console.log("blogs of user", blogs);
        };
        fetchBlogs();
    }, []);

    return (
        <div
            className="w-full  mt-2  bg-white shadow-lg py-6 px-12  rounded-b-lg
            grid grid-cols-2 gap-4"
        >
            {userBlogList.map((blog, idx) => {
                return <BlogCard blog={blog} key={blog.id} />;
            })}
        </div>
    );
};

export default UserBlogContainer;
