import { useLocation } from "react-router-dom";
import UserBlogContainer from "../components/UserBlogContainer";

const Profile = () => {
    const { state } = useLocation();
    console.log("statesssssssssssss", state);
    return (
        <div>
            <div>
                <UserBlogContainer id={state.id} />
            </div>
        </div>
    );
};

export default Profile;
