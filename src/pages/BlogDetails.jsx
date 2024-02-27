import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SingleBlog from "../components/SingleBlog";
import { useGetBlogByIdQuery } from "../apis/blogApi";

const BlogDetails = () => {
    const { state } = useLocation();
    const { id } = useParams();

    const { data } = useGetBlogByIdQuery(id);

    const [blog, setBlog] = useState({});
    const [time, setTime] = useState("");

    useEffect(() => {
        if (data) {
            setBlog(data);
            setTime(data.createdAt.split("T")[0]);
        }
    }, [data]);

    return (
        <div className="overflow-y-scroll h-full">
            <SingleBlog blog={blog} isUserBlogList={state.isUserBlogList} />
        </div>
    );
};

export default BlogDetails;
