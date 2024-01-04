import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogContainer from "../components/BlogContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserBlogs } from "../states/blogSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    console.log("user state", state);

    useEffect(() => {
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
        };
        state.id && fetchBlogs();
    }, []);
    return (
        <div>
            <BlogContainer isUserBlogList={true} />
        </div>
    );
};

export default Profile;
