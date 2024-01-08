import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { setPageNumber } from "../states/blogSlice";

const Pagination = () => {
    const dispatch = useDispatch();

    const pageNumber = useSelector((state) => state.blog.pageNumber);
    const pageCount = Math.ceil(10 / 4);

    const handlePageChange = ({ selected }) => {
        dispatch(setPageNumber(selected + 1));
    };

    return (
        <div className="rounded-md bg-white xl:col-span-2">
            <ReactPaginate
                forcePage={pageNumber - 1}
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageChange}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="flex justify-between items-center"
                pageLinkClassName="p-4"
                previousClassName="mr-4 bg-gray-600 w-28 rounded-md text-white px-4 py-2"
                nextClassName="ml-4 bg-gray-600 w-28 rounded-md text-white px-4 py-2 flex justify-center "
                activeClassName="bg-gray-600 rounded-full text-white py-2"
            />
        </div>
    );
};

export default Pagination;
