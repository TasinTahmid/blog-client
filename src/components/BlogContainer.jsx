/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const BlogContainer = ({ isUserBlogList }) => {
    const blogs = useSelector((state) =>
        isUserBlogList ? state.blogTypes.userBlogList : state.blogTypes.blogList
    );
    console.log("render blog container.,", blogs);

    return (
        <div
            className="bg-gray-50  overflow-y-scroll w-full h-full py-6  px-auto  
            flex justify-center"
        >
            <div className="w-2/3 grid grid-cols-2 gap-y-12 gap-x-14 justify-items-center">
                {blogs.map((blog) => {
                    return <BlogCard blog={blog} key={blog.id} />;
                })}
            </div>
        </div>
    );
};

export default BlogContainer;
