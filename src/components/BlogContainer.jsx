/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import CreateBlogInputButton from "./CreateBlogInputButton";
import BlogForm from "./BlogForm";
import SingleBlog from "./SingleBlog";
import Paginate from "./Pagination";

const BlogContainer = ({ isUserBlogList, toggleProfileDetails }) => {
    const [singleBlog, setSingleBlog] = useState(null);
    const [isCreateBlogActive, setIsCreateBlogActive] = useState(false);
    const [blogToEdit, setBlogToEdit] = useState(null);

    const blogs = useSelector((state) =>
        isUserBlogList ? state.blog.userBlogList : state.blog.blogList
    );

    const handleClick = () => {
        setIsCreateBlogActive(!isCreateBlogActive);
        isUserBlogList && toggleProfileDetails();
    };
    const toggleEditBlog = (blog) => {
        setBlogToEdit(blog);
    };

    const toggleSingleBlog = (blog) => {
        setSingleBlog(blog);
    };

    return (
        <div
            className={`bg-gray-50 overflow-y-scroll  ${
                isCreateBlogActive || blogToEdit ? "h-auto w-full" : "h-full"
            } py-6  ${isUserBlogList ? "pr-20" : "px-48"}  
            flex justify-center mb-4`}
        >
            {(isCreateBlogActive || blogToEdit) && (
                <BlogForm
                    isCreateBlog={isCreateBlogActive}
                    blog={blogToEdit}
                    handleClick={handleClick}
                    toggleEditBlog={toggleEditBlog}
                    toggleProfileDetails={toggleProfileDetails}
                    isUserBlogList={isUserBlogList}
                    singleBlog={singleBlog}
                />
            )}

            {singleBlog && !blogToEdit && (
                <SingleBlog
                    blogId={singleBlog.id}
                    toggleSingleBlog={toggleSingleBlog}
                    toggleEditBlog={toggleEditBlog}
                    toggleProfileDetails={toggleProfileDetails}
                    isUserBlogList={isUserBlogList}
                />
            )}
            {!blogToEdit && !isCreateBlogActive && !singleBlog && (
                <>
                    <div
                        className={`${
                            !blogs?.length ? "w-full" : "w-fit"
                        } grid xl:grid-cols-2 grid-cols-1 gap-y-12 gap-x-14 justify-items-center`}
                    >
                        <CreateBlogInputButton handleClick={handleClick} />
                        {blogs.map((blog) => {
                            return (
                                <BlogCard
                                    blog={blog}
                                    key={blog.id}
                                    toggleSingleBlog={toggleSingleBlog}
                                    toggleEditBlog={toggleEditBlog}
                                    toggleProfileDetails={toggleProfileDetails}
                                    isUserBlogList={isUserBlogList}
                                />
                            );
                        })}
                        <Paginate isUserBlogList={isUserBlogList} />
                    </div>
                </>
            )}
        </div>
    );
};

export default BlogContainer;
