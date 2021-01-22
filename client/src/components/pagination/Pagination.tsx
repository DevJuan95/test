import React from 'react';
import ReactPaginate from 'react-paginate';
import { Data } from '../../types/SearchTypes';

type Props = {
    calculatePageCount: (data: Data) => number;
    paginationClickHandler: (option: any) => Promise<void>;
    pageCount: number;
    currentPage: number;
}
const Pagination: React.FC<Props> = (props: Props) => {
    return (
        <div className="paginationContainer">
            <ReactPaginate
                previousLabel={'🠔'}
                nextLabel={'➞'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={props.pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={props.paginationClickHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={props.currentPage}
            />
        </div>
    )
}
export default Pagination;