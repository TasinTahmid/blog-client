import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogContainer from "../components/BlogContainer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserBlogs } from "../states/blogSlice";
import DotLoader from "react-spinners/DotLoader";
import ProfileDetails from "../components/ProfileDetails";
import PasswordUpdateForm from "../components/PasswordUpdateForm";

const Profile = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [profileSettings, setProfileSettings] = useState(false);
    const [showProfileDetails, setShowProfileDetails] = useState(true);
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

    const toggleProfileSettings = () => {
        setProfileSettings(!profileSettings);
    };

    const toggleProfileDetails = () => {
        setShowProfileDetails(!showProfileDetails);
    };
    return (
        <div className="pl-8 bg-gray-50 h-5/6  grid grid-cols-10 gap-10 overflow-auto ">
            {profileSettings ? (
                <PasswordUpdateForm
                    toggleProfileSettings={toggleProfileSettings}
                />
            ) : (
                <>
                    {showProfileDetails && (
                        <ProfileDetails
                            toggleProfileSettings={toggleProfileSettings}
                        />
                    )}
                    <div
                        className={`col-span-7 h-full ${
                            !showProfileDetails ? "w-screen" : "w-full"
                        } overflow-auto `}
                    >
                        {loading ? (
                            <div
                                className="bg-gray-50 relative size-full py-10 px-auto  
                flex justify-center items-center"
                            >
                                <DotLoader color="#bcaeae" size={80} />
                            </div>
                        ) : (
                            <BlogContainer
                                isUserBlogList={true}
                                toggleProfileDetails={toggleProfileDetails}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
