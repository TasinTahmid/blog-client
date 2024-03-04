/* eslint-disable no-undef */

import { fireEvent, render, screen, act } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PasswordUpdateForm from "../../components/PasswordUpdateForm";
import * as hookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordUpdateSchema } from "../../schemas/user.schema";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../states/authSlice";
import { useUpdatePasswordMutation } from "../../apis/userApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

jest.mock("react-router-dom");
// jest.mock("react-hook-form");
// jest.mock("@hookform/resolvers/yup");
// jest.mock("@hookform/resolvers/yup", () => ({
//     __esModule: true,
//     default: jest.fn(),
// }));

describe("1. Testing Password update form", () => {
    // test("a. should render the update password form component and navigate on click to bact to profile button.", () => {
    //     // Arrange
    //     const store = mockStore({ auth: { isLoggedIn: true } });
    //     const mockNavigate = jest.fn();
    //     useNavigate.mockReturnValue(mockNavigate);
    //     render(
    //         <Provider store={store}>
    //             <PasswordUpdateForm />
    //         </Provider>
    //     );
    //     // Act
    //     const updatePasswordForm = screen.getByTestId("update-form");
    //     const backButton = screen.getByTestId("back-button");
    //     fireEvent.click(backButton);
    //     // Assert
    //     expect(updatePasswordForm).toBeInTheDocument();
    //     expect(mockNavigate).toHaveBeenCalled();
    // });
    test("b. should render the update password form component and navigate on click to bact to profile button.", async () => {
        // Arrange
        const store = mockStore({ auth: { isLoggedIn: true } });

        const mockObject = {
            register: jest.fn(),
            handleSubmit: jest.fn(),
            formState: { errors: { exampleError: "mockFormStateError" } },
        };
        jest.spyOn(hookForm, "useForm").mockReturnValue(mockObject);

        // yupResolver.mockReturnValue({ resolver: "mock-resolver" });
        // const mockUseForm = useForm.mockReturnValue(mockObject);
        // useForm.mockReturnValue(mockUseForm);
        render(
            <Provider store={store}>
                <PasswordUpdateForm />
            </Provider>
        );
        // Act
        const updatePasswordForm = screen.getByTestId("update-form");
        const oldPasswordInput = screen.getByTestId("oldPassword");
        const newPasswordInput = screen.getByTestId("newPassword");
        const confirmNewPasswordInput = screen.getByTestId("confirmNewPassword");
        const submitButton = screen.getByTestId("submit-button");
        const form = submitButton.closest("form");
        form.submit = jest.fn();

        await act(() => {
            fireEvent.change(oldPasswordInput, { target: { value: "oldPassword" } });
            fireEvent.change(newPasswordInput, { target: { value: "newPassword" } });
            fireEvent.change(confirmNewPasswordInput, { target: { value: "confirmNewPassword" } });
            fireEvent.click(submitButton);
        });
        // Assert
        expect(updatePasswordForm).toBeInTheDocument();
        expect(mockObject.handleSubmit).toHaveBeenCalled();
    });
});
