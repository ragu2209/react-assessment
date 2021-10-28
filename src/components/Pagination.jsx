import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsperpage, totalPosts, Paginate }) => {
  const pageNumbers = [];
  //Here we are pushing the page numbers in array and use it below for getting the numbers of posts page
  for (let i = 1; i <= Math.ceil(totalPosts / postsperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="Pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <Link to="/" onClick={() => Paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
