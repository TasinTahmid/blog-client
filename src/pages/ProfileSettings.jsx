import PasswordUpdateForm from "../components/PasswordUpdateForm";
import ItemBar from "../components/ItemBar";
import { Outlet } from "react-router-dom";

const ProfileSettings = () => {
    return (
        <div className="bg-white size-full ">
            <ItemBar />
            {/* <PasswordUpdateForm /> */}
            <Outlet />
        </div>
    );
};

export default ProfileSettings;
