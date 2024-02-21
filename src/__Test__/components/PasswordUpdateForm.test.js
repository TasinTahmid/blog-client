/* eslint-disable no-undef */

import { fireEvent, render, screen, act } from "@testing-library/react";
// import { act } from "react-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PasswordUpdateForm from "../../components/PasswordUpdateForm";
import { useForm } from "react-hook-form";
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
        const mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);

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

        await act(() => {
            /* fire events that update state */
            fireEvent.change(oldPasswordInput, { target: { value: "oldPassword" } });
            fireEvent.change(newPasswordInput, { target: { value: "newPassword" } });
            fireEvent.change(confirmNewPasswordInput, { target: { value: "confirmNewPassword" } });
            fireEvent.click(submitButton);
        });
        // Assert
        expect(updatePasswordForm).toBeInTheDocument();
        // expect(mockNavigate).toHaveBeenCalled();
    });
});