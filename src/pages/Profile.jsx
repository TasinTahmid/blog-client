import React from "react";
import Nav from "../components/Nav";
import UserBlogContainer from "../components/UserBlogContainer";

const Profile = () => {
    return (
        <div>
            <Nav />
            <div>
                <UserBlogContainer />
            </div>
        </div>
    );
};

export default Profile;
