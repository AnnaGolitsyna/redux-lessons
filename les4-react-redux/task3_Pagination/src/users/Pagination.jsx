import React from 'react';
import PropTypes from 'prop-types';
import { itemsPerPage } from './variables.js';


const Pagination = ({ currentPage, usersLength, goPrev, goNext }) => {
  const isPrevPageAvailable = currentPage === 1;
  const isNextPageAvailable =
    currentPage === Math.ceil(usersLength / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
        {!isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
        {!isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  usersLength: PropTypes.number.isRequired,
  goPrev: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
};

export default Pagination;
