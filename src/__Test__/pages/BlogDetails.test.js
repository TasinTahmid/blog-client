/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useParams, useLocation } from "react-router-dom";
import * as SingleBlog from "../../components/SingleBlog";
import { useGetBlogByIdQuery } from "../../apis/blogApi";

import BlogDetails from "../../pages/BlogDetails";

jest.mock("react-router-dom");
jest.mock("../../apis/blogApi");

describe("Testing BlogDetails page.", () => {
    const mockBlog = {
        id: "2f571e0c-a386-4cff-a341-b74867fa223e",
        title: "lastr  blog",
        blogContent: "l;kahsjdofi22",
        userId: "2f03ba03-9005-46e3-b5b1-12d94ba63c0b",
        createdAt: "2024-02-21T08:58:14.000Z",
    };

    test("Should render Singlepage in BlogDetails page.", () => {
        // Arrange

        const mockComponent = jest.fn(() => <div data-testid="SingleBlog">Mocked SingleBlog</div>);
        jest.spyOn(SingleBlog, "default").mockImplementation(mockComponent);
        useParams.mockReturnValue({ id: "mock-id" });
        useLocation.mockReturnValue({ state: { isUserBlogList: true } });
        useGetBlogByIdQuery.mockReturnValue({ data: mockBlog });

        render(<BlogDetails />);

        // Act
        const mockSingleBlog = screen.getByTestId("SingleBlog");

        // Assert
        expect(mockSingleBlog).toBeInTheDocument();
    });
});
