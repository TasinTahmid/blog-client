import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../states/authSlice";

const PasswordUpdateForm = ({ toggleProfileSettings }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("innnn");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reEnteredNewPassword, setReEnteredNewPassword] = useState("");

    const { user, token } = useSelector((state) => state.auth);

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("updata pass,", user.id);
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/v1/users/${user.id}`,
                {
                    oldPassword,
                    newPassword,
                },
                {
                    headers: {
                        Accept: "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            toggleProfileSettings();
            navigate("/");
            dispatch(setLogout());
        } catch (error) {
            console.log("error...", error.response);
        }
    };

    return (
        <div className="w-screen  bg-gray-50 flex justify-center px-auto">
            <form className="rounded-md w-1/3 my-6  bg-gray-50 shadow-2xl p-14">
                <div className="w-full space-y-12 border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl font-semibold leading-10 text-gray-900">
                        Change Password
                    </h2>

                    <div className="mt-7 w-3/4">
                        <label
                            htmlFor="oldPassword"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Old Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="oldPassword"
                                value={oldPassword}
                                onChange={(e) => {
                                    setOldPassword(e.target.value);
                                }}
                                className="mb-6 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            New Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                }}
                                className="mb-6 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <label
                            htmlFor="reEnteredNewPassword"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Confirm New Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="reEnteredNewPassword"
                                value={reEnteredNewPassword}
                                onChange={(e) => {
                                    setReEnteredNewPassword(e.target.value);
                                }}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button
                        type="button"
                        class="rounded-md text-sm font-semibold px-4 py-2 text-gray-900 hover:bg-gray-100 active:bg-gray-50"
                        onClick={toggleProfileSettings}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className=" rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 active:bg-gray-600"
                        onClick={handleUpdate}
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PasswordUpdateForm;
