import React from 'react'

const Pagination = ( { postsPerPage, totalPosts, paginate } ) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        // Math.ceil => 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수형으로 반환함
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;