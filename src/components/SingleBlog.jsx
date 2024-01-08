import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlogById } from "../states/blogSlice";

import axios from "axios";

const SingleBlog = ({
    toggleSingleBlog,
    blogId,
    toggleEditBlog,
    toggleProfileDetails,
    isUserBlogList,
}) => {
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);
    const blogs = useSelector((state) => state.blogTypes.blogList);

    const blog = blogs.find((b) => b.id == blogId);
    const [time, setTime] = useState("");

    useEffect(() => {
        setTime(blog.createdAt.split("T")[0]);
    }, []);

    const deleteBlog = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/v1/blogs/${blog.id}`,
                {
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            dispatch(deleteBlogById(response.data.id));
            toggleSingleBlog(null);
        } catch (error) {
            console.log("error...", error.response);
        }
    };

    const handleBack = () => {
        toggleSingleBlog(null);
        // console.log("in singleblog", isUserBlogList);
        toggleProfileDetails();
    };
    return (
        <div
            className={`${
                isUserBlogList ? "w-4/5 " : "w-full"
            }  h-full  bg-gray-50`}
        >
            <button
                type="button"
                class="flex justify-between rounded-md text-sm p-2 font-semibold mb-4 text-gray-900 hover:bg-gray-100 active:bg-gray-50"
                onClick={handleBack}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                    />
                </svg>
                back
            </button>
            <h2 className="p-2 text-6xl mb-8 font-semibold">{blog.title}</h2>

            <div className="p-2 flex justify-between items-center">
                <p className="my-6">{time}</p>
                {user.id === blog.userId && (
                    <div>
                        <button
                            className=" rounded-md px-1 h-8 text-sm font-semibold  text-gray-900 hover:underline hover:underline-offset-2 active:bg-gray-50"
                            onClick={() => {
                                toggleEditBlog(blog);
                            }}
                        >
                            Update
                        </button>
                        <span>|</span>
                        <button
                            className="text-red-600 rounded-md px-1 h-8 text-sm font-semibold  text-gray-900 hover:underline hover:underline-offset-2 active:bg-gray-50"
                            onClick={deleteBlog}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>

            <div className="p-2">
                <p className="my-6 inline">{blog.blogContent}</p>
            </div>
        </div>
    );
};

export default SingleBlog;
