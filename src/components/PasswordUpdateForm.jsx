/* eslint-disable react/prop-types */
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordUpdateSchema } from "../schemas/user.schema";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../states/authSlice";
import { useUpdatePasswordMutation } from "../apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordUpdateForm = ({ toggleProfileSettings }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updatePassword] = useUpdatePasswordMutation();

    const { user, token } = useSelector((state) => state.auth);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(passwordUpdateSchema),
    });

    const { errors } = formState;

    const onSubmit = async (body) => {
        console.log("update body,", body);

        const response = await updatePassword({ id: user.id, body, token });

        console.log("after update", response);

        if (response.data) {
            toast.success("Password updated successfully.", {
                position: "bottom-right",
                autoClose: 700,
            });

            setTimeout(() => {
                navigate("/");
                dispatch(setLogout());
            }, 1200);
        }
        if (response.error) {
            toast.error(response.error.data.message, {
                position: "bottom-right",
                autoClose: 1500,
            });
        }
        // try {
        //     const response = await axios.patch(
        //         `http://localhost:5000/api/v1/users/${user.id}`,
        //         {
        //             oldPassword,
        //             newPassword,
        //         },
        //         {
        //             headers: {
        //                 Accept: "application/json",
        //                 authorization: `Bearer ${token}`,
        //             },
        //         }
        //     );
        //     console.log(response.data);
        //     toggleProfileSettings();
        //     navigate("/");
        //     dispatch(setLogout());
        // } catch (error) {
        //     console.log("error...", error.response);
        // }
    };

    return (
        <div className="relative mx-auto h-fit w-fit bg-white flex justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-md w-full m-8  bg-gray-50 shadow-2xl p-14"
            >
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
                                type="password"
                                id="oldPassword"
                                {...register("oldPassword")}
                                className="mb-6 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                            <p className="text-red-600">
                                {errors.oldPassword?.message}
                            </p>
                        </div>
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            New Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="newPassword"
                                {...register("newPassword")}
                                className="mb-6 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                            <p className="text-red-600">
                                {errors.newPassword?.message}
                            </p>
                        </div>
                        <label
                            htmlFor="confirmNewPassword"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Confirm New Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="confirmNewPassword"
                                {...register("confirmNewPassword")}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            />
                            <p className="text-red-600">
                                {errors.confirmNewPassword?.message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-x-6">
                    <button
                        type="button"
                        className="rounded-md text-sm font-semibold px-4 py-2 text-gray-900 hover:bg-gray-100 active:bg-gray-50"
                        onClick={toggleProfileSettings}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className=" rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-500 active:bg-gray-600"
                    >
                        Change Password
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default PasswordUpdateForm;
