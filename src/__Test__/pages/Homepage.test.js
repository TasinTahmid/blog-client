/* eslint-disable no-undef */
import * as BlogContainer from "../../components/BlogContainer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useGetAllBlogsQuery } from "../../apis/blogApi";
import Homepage from "../../pages/Home";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import mockBlogList from "../mockDB";

const mockStore = configureStore([]);

jest.mock("../../apis/blogApi");

describe("Testing Homepage.", () => {
    test("Should render BlogContainer in Homepage.", () => {
        // Arrange
        const mockComponent = jest.fn(() => (
            <div data-testid="BlogContainer">Mocked BlogContainer</div>
        ));
        jest.spyOn(BlogContainer, "default").mockImplementation(mockComponent);
        useGetAllBlogsQuery.mockReturnValue({ data: mockBlogList, isLoading: false });

        const store = mockStore({ blog: { pageNumberForAllBlogs: 1 } });

        render(
            <Provider store={store}>
                <Homepage />
            </Provider>
        );

        // Act
        const mockBlogContainer = screen.getByTestId("BlogContainer");

        // Assert
        expect(mockBlogContainer).toBeInTheDocument();
    });
});
