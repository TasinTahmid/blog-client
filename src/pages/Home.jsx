import axios from "axios";
import BlogContainer from "../components/BlogContainer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBlogs } from "../states/blogSlice";
import DotLoader from "react-spinners/DotLoader";
import CreateBlogInputButton from "../components/CreateBlogInputButton";

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [pageSize, setPageSize] = useState(4);
    const pageNumber = useSelector((state) => state.blog.pageNumber);
    console.log("page in home ,", pageNumber);

    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/v1/blogs?page=${pageNumber}&size=${pageSize}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            dispatch(setBlogs(response.data));
            setTimeout(() => {
                setLoading(false);
            }, 600);
        };
        fetchBlogs();
    }, [pageNumber]);

    return (
        <div className="bg-gray-50 h-5/6 overflow-auto">
            {loading ? (
                <div
                    className="bg-gray-50 w-full h-full py-10 px-auto  
                flex justify-center items-center"
                >
                    <DotLoader color="#bcaeae" size={80} />
                </div>
            ) : (
                <>
                    <BlogContainer />
                </>
            )}
        </div>
    );
};

export default Home;
