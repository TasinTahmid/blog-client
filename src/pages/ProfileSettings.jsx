import ItemBar from "../components/ItemBar";
import { Outlet } from "react-router-dom";

const ProfileSettings = () => {
    return (
        <div className="bg-white size-full ">
            <ItemBar />
            <Outlet />
        </div>
    );
};

export default ProfileSettings;
