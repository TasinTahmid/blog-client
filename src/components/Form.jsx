import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../states/authSlice";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isRegisterPage, setIsRegisterPage] = useState(false);
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

        console.log("from login", response.data);
        if (response.data.token) {
            dispatch(
                setLogin({
                    user: response.data.user,
                    token: response.data.token,
                })
            );
            navigate("/home");
        }
    };

    const register = async () => {
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
        console.log(response.data);
        if (response.token) {
            dispatch(
                setLogin({
                    user: response.user,
                    token: response.token,
                })
            );
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isRegisterPage) return await register();
        return await login();
    };
    return (
        <form className="mt-10 w-1/2">
            <div className="space-y-12">
                <div className=" border-b border-gray-900/10 pb-12">
                    {isRegisterPage && (
                        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-35 sm:grid-cols-6">
                            <div className="sm:col-span-4">
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
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
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
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
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
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
                <div>
                    <button
                        type="button"
                        className="rounded-md px-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-2"
                        onClick={() => setIsRegisterPage(!isRegisterPage)}
                    >
                        {isRegisterPage
                            ? "Already have an account? Login here."
                            : "Don't have an account? Register here."}
                    </button>
                </div>
                <div className="flex items-center justify-between gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400"
                        onClick={handleSubmit}
                    >
                        {isRegisterPage ? "Register" : "Login"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
