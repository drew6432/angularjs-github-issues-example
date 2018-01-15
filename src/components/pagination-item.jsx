import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Issue.css';

const PaginationItem = ({ isDisabled, pageNum, display, setPage, isActive }) => {

    const handleOnClick = () => {
        setPage(pageNum);
    }

    return (
        <li className={`${isDisabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`}>
            <a onClick={handleOnClick}>{display ? display : pageNum}</a>
        </li>
    );
};

PaginationItem.propTypes = {
    isDisabled: PropTypes.bool,
    pageNum: PropTypes.number,
    display: PropTypes.string,
    setPage: PropTypes.func,
    isActive: PropTypes.bool,
};

PaginationItem.defaultProps = {
    isActive: false,
    isDisabled: false
}

export default PaginationItem;