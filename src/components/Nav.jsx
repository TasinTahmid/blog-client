/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../states/authSlice";

const Nav = () => {
    const navigate = useNavigate();
    const [isMenuActive, setIsMenuActive] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    return (
        <div className="flex justify-between items-center w-full bg-white shadow-md px-6 py-4  rounded-t-lg">
            <p>Blog App</p>
            <div className="flex justify-between gap-x-14">
                <div>Home</div>
                <div>Profile</div>
            </div>
            <div className="flex justify-between gap-x-14">
                <div className="flex justify-between  gap-x-14 relative ml-3">
                    {!token ? (
                        <button
                            onClick={() => navigate("/auth")}
                            className="rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 active:bg-gray-600"
                        >
                            Login
                        </button>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            dataSlot="icon"
                            onClick={() => setIsMenuActive(!isMenuActive)}
                            className="w-6 h-6 hover:cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                    {token && isMenuActive && (
                        <div className="absolute top-4 right-3 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                            <div className="active:bg-gray-50 hover:bg-gray-100">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 "
                                >
                                    Your Profile
                                </a>
                            </div>
                            <div className="active:bg-gray-50 hover:bg-gray-100">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 "
                                >
                                    Edit Profile
                                </a>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(setLogout());
                                }}
                                className="flex justify-start align-center active:bg-gray-50 hover:bg-gray-100 hover:cursor-pointer"
                            >
                                <button className="rounded-md  px-4 py-2 text-sm font-semibold   ">
                                    Log out
                                </button>
                                <div className="pt-2 flex justify-start align-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        dataSlot="icon"
                                        className="w-6 h-6 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
