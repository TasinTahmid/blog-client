/* eslint-disable no-undef */
import * as BlogContainer from "../../components/BlogContainer";
import * as ProfileDetails from "../../components/ProfileDetails";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useGetUserBlogsQuery } from "../../apis/blogApi";
import Profile from "../../pages/Profile";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import mockBlogList from "../mockDB";

const mockStore = configureStore([]);

jest.mock("../../apis/blogApi");

describe("Testing Profilepage.", () => {
    test("Should render BlogContainer in Profilepage.", () => {
        // Arrange
        const mockContainer = jest.fn(() => (
            <div data-testid="BlogContainer">Mocked BlogContainer</div>
        ));
        const mockProfileDetails = jest.fn(() => (
            <div data-testid="ProfileDetails">Mocked mockProfileDetails</div>
        ));
        jest.spyOn(BlogContainer, "default").mockImplementation(mockContainer);
        jest.spyOn(ProfileDetails, "default").mockImplementation(mockProfileDetails);
        useGetUserBlogsQuery.mockReturnValue({ data: mockBlogList, isLoading: false });

        const mockUser = {
            id: "mock-id",
            username: "mock-username",
            email: "mock-email",
        };

        const store = mockStore({
            blog: { pageNumberForAllBlogs: 1 },
            auth: { user: mockUser },
        });

        render(
            <Provider store={store}>
                <Profile />
            </Provider>
        );

        // Act
        const mockBlogContainer = screen.getByTestId("BlogContainer");
        const mockProfileComponent = screen.getByTestId("ProfileDetails");

        // Assert
        expect(mockBlogContainer).toBeInTheDocument();
        expect(mockProfileComponent).toBeInTheDocument();
    });
});
