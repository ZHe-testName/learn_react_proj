import React from 'react';
import usePagination from '../hooks/usePagination';

const Pagination = ({ totalCount, setPage, page }) => {
    const paginationArr = usePagination(totalCount);
    
    return (
        <div className="pagination">
            {
                paginationArr.map(p => {
                    return <span
                                key={p}
                                className={`${p === page ? 'pag_button pag_active' : 'pag_button'}`}
                                onClick={() => setPage(p)}
                                >
                                {p}
                            </span>;
                })
            }
        </div>
    );
};

export default Pagination;