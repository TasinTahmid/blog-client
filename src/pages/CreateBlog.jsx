import BlogForm from "../components/BlogForm";

const CreateBlog = () => {
    const blog = {
        title: "",
        blogContent: "",
    };
    return <BlogForm isCreateBlog={true} blog={blog} />;
};

export default CreateBlog;
