import BlogForm from "../components/BlogForm";
import { useLocation } from "react-router-dom";

const UpdateBlog = ({ blog }) => {
    const { state } = useLocation();

    return <BlogForm isCreateBlog={false} blog={state.blog} />;
};

export default UpdateBlog;
