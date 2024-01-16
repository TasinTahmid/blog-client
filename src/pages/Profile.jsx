import BlogContainer from "../components/BlogContainer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import ProfileDetails from "../components/ProfileDetails";
import PasswordUpdateForm from "../components/PasswordUpdateForm";
import { setUserBlogs, setUserBlogCount } from "../states/blogSlice";
import { useGetUserBlogsQuery } from "../apis/api";

const Profile = () => {
    const dispatch = useDispatch();
    const [profileSettings, setProfileSettings] = useState(false);
    const [showProfileDetails, setShowProfileDetails] = useState(true);
    const [pageSize, setPageSize] = useState(4);

    const pageNumber = useSelector((state) => state.blog.pageNumberForUserBlogs);
    const user = useSelector((state) => state.auth.user);

    const { data, error, isLoading } = useGetUserBlogsQuery({
        id: user?.id,
        pageNumber,
        pageSize,
    });

    const [loading, setLoading] = useState(isLoading);
    console.log("this is rtk query data", data, isLoading);

    useEffect(() => {
        dispatch(setUserBlogs(data?.blogList));
        dispatch(setUserBlogCount(data?.count));
        if (!isLoading) {
            setTimeout(() => {
                setLoading(false);
            }, 600);
        }
    }, [data, pageNumber, isLoading, dispatch]);

    // useEffect(() => {
    //     setLoading(true);
    //     const fetchBlogs = async () => {
    //         const response = await axios.get(
    //             `http://localhost:5000/api/v1/users/${user.id}/blogs?page=${pageNumber}&size=${pageSize}`,
    //             {
    //                 headers: {
    //                     Accept: "application/json",
    //                 },
    //             }
    //         );
    //         console.log("blogAndCount", response.data);
    //         dispatch(setUserBlogs(response.data.blogList));
    //         dispatch(setUserBlogCount(response.data.count));
    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 600);
    //     };
    //     user.id && fetchBlogs();
    // }, []);

    const toggleProfileSettings = () => {
        setProfileSettings(!profileSettings);
    };

    const toggleProfileDetails = () => {
        setShowProfileDetails(!showProfileDetails);
    };
    return (
        <div className="pl-8 bg-gray-50 h-5/6  grid grid-cols-10 gap-10 overflow-auto ">
            {profileSettings ? (
                <PasswordUpdateForm toggleProfileSettings={toggleProfileSettings} />
            ) : (
                <>
                    {showProfileDetails && (
                        <ProfileDetails toggleProfileSettings={toggleProfileSettings} />
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
