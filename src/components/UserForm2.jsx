import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPageTypeLogin, setPageTypeRegister } from "../states/pageTypeSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../schemas/user.schema.js";
import { useCreateUserMutation } from "../apis/userApi.js";

const UserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [createUser, responseData] = useCreateUserMutation();

    const { pageType } = useSelector((state) => state.pageType);
    const { register, handleSubmit, control, formState } = useForm({
        resolver: yupResolver(userSchema),
    });

    const { errors } = formState;

    const handleRegister = () => {};
    const handleLogin = () => {};

    const onSubmit = (data) => {
        console.log(data);
        if (pageType == "register") return createUser({ body: data });
        return handleLogin();
    };

    return (
        <div className="h-full flex justify-center bg-gray-50">
            {pageType}
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-20 w-2/3 h-fit bg-white p-16"
            >
                <h2 className="mx-4 mb-8 text-2xl font-semibold leading-10 text-gray-900">
                    {pageType == "register" ? "Register" : "Login"}
                </h2>

                {pageType == "register" && (
                    <div className="mb-2 p-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...register("username")}
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                        />
                        <p className="text-red-600">{errors.username?.message}</p>
                    </div>
                )}
                <div className="mb-2 p-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    />
                    <p className="text-red-600">{errors.email?.message}</p>
                </div>
                <div className="mb-2 p-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    />
                    <p className="text-red-600">{errors.password?.message}</p>
                </div>
                {pageType == "register" && (
                    <div className="mb-2 p-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword")}
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                        />
                        <p className="text-red-600">{errors.confirmPassword?.message}</p>
                    </div>
                )}

                <div className="border-t border-gray-90 pt-8  mx-4 mt-10 flex items-center justify-between gap-x-6">
                    <button
                        type="button"
                        className="rounded-md  py-2 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:underline-offset-2"
                        onClick={() => {
                            dispatch(
                                pageType == "register" ? setPageTypeLogin() : setPageTypeRegister()
                            );
                        }}
                    >
                        {pageType == "register"
                            ? "Already have an account? Login here."
                            : "Don't have an account? Register here."}
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 active:bg-gray-600"
                        onClick={() => {}}
                    >
                        {pageType == "register" ? "Register" : "Login"}
                    </button>
                </div>
            </form>

            <DevTool control={control} />
        </div>
    );
};

export default UserForm;
