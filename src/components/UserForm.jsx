import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../states/authSlice";
import { setPageTypeLogin, setPageTypeRegister } from "../states/pageTypeSlice";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { pageType } = useSelector((state) => state.pageType);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const response = await axios.post(
            "http://localhost:5000/api/v1/users/login",
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("in auth.jsx", response.data);
        if (response.data.token) {
            dispatch(
                setLogin({
                    user: response.data.user,
                    token: response.data.token,
                })
            );
            navigate("/");
        }
    };

    const register = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/v1/users/register",
                {
                    username,
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.data.token) {
                dispatch(
                    setLogin({
                        user: response.data.user,
                        token: response.data.token,
                    })
                );
                navigate("/");
            }
        } catch (error) {
            console.log("error...", error.response);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (pageType == "register") return await register();
        return await login();
    };
    return (
        <div className="w-full flex justify-center bg-gray-50 ">
            <form className="rounded-md w-2/5 my-12  bg-white shadow-2xl p-14">
                <div className="space-y-12 border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl font-semibold leading-10 text-gray-900">
                        {pageType == "register" ? "Register" : "Login"}
                    </h2>
                    {pageType == "register" && (
                        <div className="mt-7 w-2/3">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    )}
                    <div className="mt-7 w-2/3">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="mt-7 w-2/3">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button
                        type="button"
                        className="rounded-md  py-2 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-2"
                        onClick={() =>
                            dispatch(
                                pageType == "register"
                                    ? setPageTypeLogin()
                                    : setPageTypeRegister()
                            )
                        }
                    >
                        {pageType == "register"
                            ? "Already have an account? Login here."
                            : "Don't have an account? Register here."}
                    </button>
                    <button
                        type="submit"
                        className="mr-6 rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 active:bg-gray-600"
                        onClick={handleSubmit}
                    >
                        {pageType == "register" ? "Register" : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
