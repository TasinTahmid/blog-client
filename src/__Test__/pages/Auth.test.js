/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as UserFormModule from "../../components/UserForm";

import Auth from "../../pages/Auth";

describe("Testing Auth page.", () => {
    test("Should render the user login/registration form component.", () => {
        // Arrange

        const mockComponent = jest.fn(() => <div data-testid="mockUserForm">Mocked UserForm</div>);
        jest.spyOn(UserFormModule, "default").mockImplementation(mockComponent);

        render(<Auth />);

        // Act
        const mockUserForm = screen.getByTestId("mockUserForm");

        // Assert
        expect(mockUserForm).toBeInTheDocument();
    });
});
