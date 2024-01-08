/* eslint-disable react/prop-types */
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlogById } from "../states/blogSlice";

const BlogCard = ({
    blog,
    toggleSingleBlog,
    toggleEditBlog,
    toggleProfileDetails,
}) => {
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);

    const time = blog.createdAt.split("T")[0];
    const text =
        blog.blogContent.length > 150
            ? blog.blogContent.substring(0, 150).concat("...")
            : blog.blogContent.concat("...");

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
        } catch (error) {
            console.log("error...", error.response);
        }
    };

    const handleReadMore = () => {
        toggleSingleBlog(blog);
        toggleProfileDetails();
    };

    const handleEdit = () => {
        toggleEditBlog(blog);
        toggleProfileDetails();
    };
    return (
        <div className="bg-white rounded-sm shadow-xl deleteBlogById w-full py-10 px-14">
            <h2 className="text-5xl mb-8 font-semibold">{blog.title}</h2>
            <div className="flex justify-between items-center">
                <p className="my-6">{time}</p>
                {user?.id === blog.userId && (
                    <div>
                        <button
                            className=" rounded-md px-1 h-8 text-sm font-semibold  text-gray-900 hover:underline hover:underline-offset-2 active:bg-gray-50"
                            onClick={handleEdit}
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

            <p className="my-6 inline">{text}</p>
            <button
                onClick={handleReadMore}
                className="rounded-md px-3 py-2 text-sm font-semibold cursor-pointer hover:underline hover:underline-offset-2"
            >
                Read more
            </button>
        </div>
    );
};

export default BlogCard;
