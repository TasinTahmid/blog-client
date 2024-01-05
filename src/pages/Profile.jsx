import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogContainer from "../components/BlogContainer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserBlogs } from "../states/blogSlice";
import DotLoader from "react-spinners/DotLoader";

const Profile = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { state } = useLocation();
    console.log("user state", state);

    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/v1/users/${state.id}/blogs`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            dispatch(setUserBlogs(response.data));
            setTimeout(() => {
                setLoading(false);
            }, 600);
        };
        state.id && fetchBlogs();
    }, []);
    return (
        <div className="h-5/6">
            {loading ? (
                <div
                    className="bg-gray-50 relative overflow-hidden size-full py-10 px-auto  
            flex justify-center items-center"
                >
                    <DotLoader color="#bcaeae" size={80} />
                </div>
            ) : (
                <BlogContainer isUserBlogList={true} />
            )}
        </div>
    );
};

export default Profile;
