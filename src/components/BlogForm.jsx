import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogForm = ({ isCreateBlog, blog }) => {
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth);

    const [title, setTitle] = useState(blog.title);
    const [blogContent, setBlogContent] = useState(blog.blogContent);

    const createBlog = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/v1/blogs",
                {
                    title,
                    blogContent,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            navigate("/profile", { state: { id: user.id } });
        } catch (error) {
            console.log("error...", error.response);
        }
    };
    const updateBlog = async () => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/v1/blogs/${blog.id}`,
                {
                    title,
                    blogContent,
                },
                {
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            navigate("/profile", { state: { id: user.id } });
        } catch (error) {
            console.log("error...", error.response);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isCreateBlog) return await createBlog();
        return await updateBlog();
    };
    return (
        <div className="w-full flex justify-center bg-white  p-14 ">
            <form className="mt-2 w-2/5 ">
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl font-semibold leading-10 text-gray-900">
                        {isCreateBlog ? "Create New Blogs" : "Update Your Blog"}
                    </h2>

                    <div className="mt-7 w-2/3">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                type="title"
                                autoComplete="title"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-7 w-2/3">
                        <label
                            htmlFor="blogContent"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Blog Content
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="blogContent"
                                name="blogContent"
                                type="text-area"
                                autoComplete="blogContent"
                                value={blogContent}
                                onChange={(e) => {
                                    setBlogContent(e.target.value);
                                }}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 mr-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 active:bg-gray-600"
                        onClick={handleSubmit}
                    >
                        {isCreateBlog ? "Create  Blog" : "Update Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;
