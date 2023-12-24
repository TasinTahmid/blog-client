import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const time = blog.createdAt.split("T")[0];
    const text =
        blog.blogContent.length > 150
            ? blog.blogContent.substring(0, 150).concat("...")
            : blog.blogContent;

    const showSingleBlog = (id) => {
        navigate(`blogs/${id}`);
    };
    return (
        <div className="border-2 rounded-lg relative p-8">
            <h2 className="text-6xl mb-8 font-semibold">{blog.title}</h2>
            <p className="my-6">{time}</p>

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
