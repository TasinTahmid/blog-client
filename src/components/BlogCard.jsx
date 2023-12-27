/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const location = useLocation();
    const currentUrl = location.pathname;

    const navigate = useNavigate();

    const time = blog.createdAt.split("T")[0];
    const text =
        blog.blogContent.length > 150
            ? blog.blogContent.substring(0, 150).concat("...")
            : blog.blogContent;

    const showSingleBlog = (id) => {
        navigate(`/blogs/${id}`);
    };
    return (
        <div className=" rounded-lg  p-8">
            <h2 className="text-6xl mb-8 font-semibold">{blog.title}</h2>
            <div className="flex justify-between items-center">
                <p className="my-6">{time}</p>
                {currentUrl === "/profile" && (
                    <button
                        className=" rounded-md px-3 h-8 text-sm font-semibold  text-gray-900 hover:bg-gray-100 active:bg-gray-50"
                        onClick={() => {
                            navigate("/update-blog", { state: { blog } });
                        }}
                    >
                        Update blog
                    </button>
                )}
            </div>

            <p className="my-6 inline">{text}</p>
            <button
                onClick={() => {
                    showSingleBlog(blog.id);
                }}
                className="rounded-md px-3 py-2 text-sm font-semibold cursor-pointer hover:underline hover:underline-offset-2"
            >
                Read more
            </button>
        </div>
    );
};

export default BlogCard;
