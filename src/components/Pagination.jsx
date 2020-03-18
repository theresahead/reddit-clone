import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ previous, next }) {
  return (
    <nav className="pt-3" aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={previous} type="button">
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={next} type="button">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.defaultProps = {
  next: null,
  previous: null,
};

Pagination.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
};

export default Pagination;
